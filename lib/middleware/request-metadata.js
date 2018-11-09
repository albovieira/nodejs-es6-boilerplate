const CHANNEL = '_project_';

export default function () {
  return (req, res, next) => {
    req.getRequestMetadata = () => ({
      server: req.headers.host,
      http_method: req.method,
      ctxt_user: 0,
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      channel: CHANNEL,
      url: req.originalUrl,
      origin: req.user ? req.user.domain : 'no-domain',
    });

    next();
  };
}
