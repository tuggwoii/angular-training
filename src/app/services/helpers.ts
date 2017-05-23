import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class Helpers {

    public compareUrlWithRouteConfig(url, route, childs): boolean {
        var isMatch = false;
        var requestURL = this.removeTrailingSlash(url);
        var configURL = this.removeTrailingSlash('/' + route);
        var currentPaths = requestURL.split('/');
        var configPaths = configURL.split('/');
        if (currentPaths.length == configPaths.length) {
            var isMatches = true;
            for (var i = 0; i < currentPaths.length; i++) {
                let isParameter = configPaths[i].indexOf(':') > -1;
                if (isParameter) {
                    if (currentPaths[i].toLowerCase() == configPaths[i].toLowerCase()) {
                        isMatches = false;
                    }
                }
                else {
                    if (currentPaths[i].toLowerCase() != configPaths[i].toLowerCase()) {
                        isMatches = false;
                    }
                }
            }
            if (isMatches) {
                isMatch = true;
            }
        }
        else if (childs && childs.length && currentPaths.length > 2) {
            if (currentPaths[0] == configPaths[0] && currentPaths[1] == configPaths[1]) {
                for (var i = 0; i < childs.length; i++) {
                    if (childs[i].path == currentPaths[2]) {
                        isMatch = true;
                    }
                }
            }
        }

        return isMatch;
    }

    public forEach(arrs: Array<any>, handler: Function) {
        for (var i = 0; i < arrs.length; i++) {
            handler(arrs[i]);
        }
    }

    public removeTrailingSlash(url) {
        if (url.substr(-1) === '/') {
            return url.substr(0, url.length - 1);
        }
        return url;
    }
}