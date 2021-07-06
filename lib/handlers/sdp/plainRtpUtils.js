export function extractPlainRtpParameters({ sdpObject, kind }) {
    const mediaObject = (sdpObject.media || [])
        .find((m) => m.type === kind);
    if (!mediaObject)
        throw new Error(`m=${kind} section not found`);
    const connectionObject = mediaObject.connection || sdpObject.connection;
    return {
        ip: connectionObject.ip,
        ipVersion: connectionObject.version,
        port: mediaObject.port
    };
}
export function getRtpEncodings({ sdpObject, kind }) {
    const mediaObject = (sdpObject.media || [])
        .find((m) => m.type === kind);
    if (!mediaObject)
        throw new Error(`m=${kind} section not found`);
    const ssrcCnameLine = (mediaObject.ssrcs || [])[0];
    const ssrc = ssrcCnameLine ? ssrcCnameLine.id : null;
    if (ssrc)
        return [{ ssrc }];
    else
        return [];
}
