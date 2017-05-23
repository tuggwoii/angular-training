import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

export const slideInDownAnimation: AnimationEntryMetadata =
    trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'translateX(0)',
                position: 'relative',
                left: '0',
                width: '100%',
                zIndex: '2'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)',
                position: 'absolute',
                zIndex: '3'
            }),
            animate('0.25s ease-in')
        ]),
        transition(':leave', [
            animate('0.5s ease-out', style({
                opacity: 0,
                transform: 'translateX(80%)',
                position: 'absolute',
                zIndex: '1'
            }))
        ])
    ]);