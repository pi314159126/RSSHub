import { config } from '@/config';

function getConfig(ctx) {
    if (!config.discourse.config[ctx.req.param('configId')]) {
        throw new Error('Discourse RSS is disabled due to the lack of <a href="https://docs.rsshub.app/deploy/">relevant config</a>');
    }
    return config.discourse.config[ctx.req.param('configId')];
}

export { getConfig };
