import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}
  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert C. Martin',
        image:
          'https://res.cloudinary.com/dmgfxu4fg/image/upload/v1660248037/cleancode_mysk0f.jpg',
        price: 200000,
      },
      {
        name: 'The Pragmatic Programmer',
        author: 'David Thomas, Andrew HuntSteve McConnell',
        image:
          'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20_hu7d9a813cf46675dfb7b1bf4930cee733_2802494_250x0_resize_q75_box.jpg',
        price: 150000,
      },
      {
        name: 'Introduction to Algorithms',
        author:
          'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
        image:
          'https://hackr.io/blog/uploads/images/introduction-to-algorithms-eastern-economy-edition.jpg?ezimgfmt=rs:222x283/rscb1/ng:webp/ngcb1',
        price: 100000,
      },
      {
        name: 'Code Complete: A Practical Handbook of Software Construction',
        author: 'Steve McConnell',
        image:
          'https://hackr.io/blog/uploads/images/code-caomplete.jpg?ezimgfmt=rs:180x213/rscb1/ng:webp/ngcb1',
        price: 300000,
      },
    ];
  }
}
