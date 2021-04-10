interface Module {
  mount: (module: any, options: any) => void;
}
interface Container {
  init: (module: any) => void;
  get: (modelName: string) => () => Module;
}
declare function __webpack_init_sharing__(scope: string): void;
declare let __webpack_share_scopes__: any;

const init = (remote: string, moduleName: string, options) => {
  const { selector } = options || {};

  if (!selector) {
    throw Error('Selector required');
  }

  const element = document.querySelector(selector);
  if (!element) {
    throw Error(`Element not found: ${selector}`);
  }

  const appParts = remote.split('@');
  const appName = appParts[0];
  const url = appParts[1];
  if (!appName || !url) {
    throw Error('Invalid remote');
  }

  const remoteScript = document.createElement('script');
  remoteScript.setAttribute('src', url);
  document.head.appendChild(remoteScript);

  remoteScript.addEventListener('load', async () => {
    await __webpack_init_sharing__('default');

    const container = window[appName] as Container;
    if (!container) {
      throw Error(`Remote not found: ${appName}`);
    }
    await container.init(__webpack_share_scopes__.default);

    const factoryFn = await container.get(moduleName);
    const module = factoryFn();
    module.mount(element, options);
  });
};

export default {
  init,
};
