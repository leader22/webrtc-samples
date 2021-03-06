import { promised } from "enhanced-datachannel";
import { $, signalingId, signalingKey, appendFooter } from "../_shared/global";
const { createChannel } = window.External;

(async () => {
  appendFooter(navigator.userAgent);

  $("#connect").onclick = async () => {
    const ch = await createChannel(signalingKey, signalingId);

    const users = await ch.fetchUsers();
    console.log(users);

    const role = users.length === 1 ? "answer" : "offer";
    if (role === "offer") console.log("Create and send offer...");
    if (role === "answer") console.log("Wait for offer...");

    const pcConf = {
      bundlePolicy: "max-bundle",
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
    };
    const pc = (window.pc = new RTCPeerConnection(pcConf));
    console.log("pc created w/", pcConf);

    const dcInit = { negotiated: true, id: 1 };
    const dc = (window.dc = pc.createDataChannel("", dcInit));
    console.log("dc created w/", dcInit);

    pc.onicecandidate = ev => {
      console.warn("onicecandidate");
      if (ev.candidate === null) return;
      if (ev.candidate.candidate === "") return;

      ch.send(ev.candidate);
      console.log("send icecandidate", ev.candidate);
    };

    ch.on("@message", async ({ data }) => {
      if (data.type === "offer") {
        console.log("receive offer");
        console.warn(data.sdp);
        await Promise.all([
          pc.setRemoteDescription(data),
          pc.createAnswer().then(answer => pc.setLocalDescription(answer))
        ]);
        console.log("send answer");
        ch.send(pc.localDescription);
        console.warn(pc.localDescription.sdp);
      }
      if (data.type === "answer") {
        console.log("receive answer");
        console.warn(data.sdp);
        await pc.setRemoteDescription(data);
      }
      if (data.candidate) {
        console.log("receive candidate");
        await pc.addIceCandidate(data);
      }
    });

    if (role === "offer") {
      await pc.createOffer().then(offer => pc.setLocalDescription(offer));
      ch.send(pc.localDescription);
      console.log("send offer");
      console.warn(pc.localDescription.sdp);
    }

    dc.onopen = () => {
      console.warn("dc.onopen");

      const pdc = (window.pdc = promised(dc));
      pdc.on("message", (data, accept) => {
        accept(navigator.userAgent);
      });

      $("#ask").onclick = async () => {
        const res = await pdc.send("What is your UA?");
        console.log(res);
      };
    };
  };
})();
