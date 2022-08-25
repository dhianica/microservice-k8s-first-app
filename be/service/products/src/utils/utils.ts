import * as path from 'path';

class Utils {
  public setUrlRoute(basePath: string, subPath: string): string {
    return `${basePath}${/\/[^/]*.*\.*\//.exec(subPath)![0]}`;
  }
  public getLastDirectory(currentDirectory: string): string {
    return path.basename(path.resolve(currentDirectory));
  }
}


export default new Utils();
