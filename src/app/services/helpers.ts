import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class Helpers {

    public compareUrlWithRouteConfig(url, route): boolean {
        var isMatch = false;
        var requestURL = this.removeTrailingSlash(url);
        var configURL = this.removeTrailingSlash('/' + route);
        var currentPaths = requestURL.split('/');
        var configPaths = configURL.split('/');

        if (currentPaths.length == configPaths.length) {
            var isMatches = true;
            for (var i = 0; i < currentPaths.length; i++) {
                var isParamiter = configPaths[i].indexOf(':') > -1;
                if (isParamiter) {
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
        return isMatch;
    }

    public forEach(arrs: Array<any>, handler: Function) {
        for (var i = 0; i < arrs.length; i++) {
            handler(handler)
        }
    }

    public removeTrailingSlash(url) {
        if (url.substr(-1) === '/') {
            return url.substr(0, url.length - 1);
        }
        return url;
    }
}