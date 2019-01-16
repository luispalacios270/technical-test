import { trigger, transition, style, animate } from '@angular/animations';

export const fade = [
  trigger('fade', [
    // state('in', style({ transform: 'translateY(0)', opacity: '1' })),
    transition('void => *', [style({ opacity: '0' }), animate(500)]),
    transition('* => void', [animate(400, style({ opacity: '0' }))])
  ])
];
