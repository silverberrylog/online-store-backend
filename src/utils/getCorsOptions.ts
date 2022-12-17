const protectedUrls = ['/auth/create-user']
const allowedRemoteAddresses = ['127.0.0.1', '::ffff:127.0.0.1', '::1']

export const getCorsOptions = (req, callback) => {
    if (
        protectedUrls.includes(req.url) &&
        !allowedRemoteAddresses.includes(req.connection.remoteAddress)
    ) {
        callback(null, { origin: true })
        return
    }

    callback(null, { origin: false })
}
