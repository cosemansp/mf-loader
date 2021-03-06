import { deferred } from './deferred';

const scriptsCache = {};

export const loadScript = async (src: string): Promise<any> => {
  if (scriptsCache[src]) {
    return scriptsCache[src];
  }

  const dfd = deferred({ timeout: 30000, id: src });

  const { document: doc } = window;

  const script = doc.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', src);

  script.addEventListener('error', (err) => {
    scriptsCache[src] = null;
    dfd.reject(new Error(`Failed to load script: ${src}`));
  });

  script.addEventListener('load', () => {
    dfd.resolve(script);
  });

  doc.head.appendChild(script);

  scriptsCache[src] = dfd;
  return dfd;
};
