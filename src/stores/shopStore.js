import { defineStore } from "Pinia";

export default defineStore("shopStore", {
  //vue data,methods,computed
  //store state,action,getters
  state: () => ({
    products: [
      {
        id: 1,
        title: "秋天的巴塞隆納",
        imageUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1674949436442.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mCS%2B2CMCHKFp75IjR7R7n5EgMef22T%2FvDfVFX3wGbu32rcQ5N3XtXk2iy428Vvg%2BT5Dy1dXWdwu2V2nhdy4rPkCU5HnZWdANl4ef3KRFVzTVRISgR3QbfNIW2ZgQfEfcjxg7MMdqOeKsvf2BicmjX%2FDCWKgsRarcbmUlk6%2FwwIroDCVjpxZtDP4jTRVj1ZhcEXqwM4meqqJFgREgJY3gYmBViNHI9ASFw4OZkZLhtvferb7jePUvh9bnABezgxyrCsy92WRGw7BuBB%2B1pT0yT%2Bvno2Zut6t%2FCcUHIxg%2F1Cg7oWUmBZdjpU4U0Tfs3T8r2A9N27ZkF5OUQoaoUU0fcw%3D%3D",
        price: 1399,
      },
      {
        id: 2,
        title: "夏天的first love",
        imageUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1674949551475.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ge4wNRUWHeVYQWvB79esryBV3%2B4Fvrb8YXk35ow%2BUVhNqS9xK69VzUAisxXK6ryfby5OvUB5uNrXco6B67c4%2FxQ75Pi2sN1plUf137%2FYpcHpORwacmHmSCX1WzyR0LAdA%2F4WG7TX0edzdPCkMFr9bHJ0V06bFP62ZUcv1PLhn%2BGVAwMcTaosw5kddL4g3heLJoXMQFH%2FcxvWK%2BkEunrs2j%2F6pvqbtnSq1JKhcceYYEZtqvNRgYvjZ1R4ZAtjlPRRl%2FDfBhfwd2zqkv%2FEfUuPAUoU%2FzHNsfJqo312pHNMSm5mGPQfnoCMuU06CBAXrsNsAH%2B1rdMqwZe53nOnHBDclw%3D%3D",
        price: 1200,
      },
      {
        id: 3,
        title: "冬天的北海道",
        imageUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1674949630318.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kRTtKnddAsz8qfazdb2zcCg8TVVCzk3oxJrZCenIdUnZyyE3M5%2BcPjDsOhXdfBOPfXeZt2mjX4CDOFcBbB0ubg6Xnq6YAr3RKbZMKKg%2FHRi6MRZSrT8rUiClIA%2FHJLrWNS8MsVwx3jY31ZYRE%2F0hqgG63OGhvs074wbBPErYjp7lxA3CkgISDfVdlsC5XX4k5RUuw2cUxNMoi6i7H36eicuysiBJNAE0HInaqx1YYzjOUFFFwSaTC3dYEszquS5WB6qLRCdLlvRAOCJe6aIbZ4wkXrBiAwHnZOgOhg2DEtDq6DzDsM9Uf0061TK%2B3gLrcLxfAc3moknkrjHs6C%2Bd9A%3D%3D",
        price: 1200,
      },
      {
        id: 4,
        title: "埃及小帥哥",
        imageUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1674949743580.JPG?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Au8Mpml5TzXT6wHt66wK0ObabUUCIPuaCpxp%2FXAU4B52ZvgbVxVMFNdHmjv7s%2BTBmykrmMN98EVFFH698us8YmaoCaFqiiXsq6q2P1MHNI%2B4phw7GPqSQtobQ9XgR843IForZohFZKrA09vwC0CtlPAT0REKRkfAG%2BNEpdxj7YZY%2FElRswOfOwl99RSDWFWJkyB5nxYKc5jOfGVPkLR8s6GyTt%2Fp2bdqCyDTIlNynP%2BkBAcnDFOGRYRtHXEaFHEnyU6XvEfTdtbiyeW5HFKxtSa0BSl12gELQRTgUDrXnsKVCjRh2Imp84SoBbPzS4DGl%2BYQ4GgKoQteR2Mwfx76Qw%3D%3D",
        price: 9999,
      },
      {
        id: 5,
        title: "吃辣小美女",
        imageUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1674949790841.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UrLmOqltqYIBmNAkQSunwOe9%2F6ZnIMGPE8hY%2B4gbrjBDczeDGU3JhMh2NoSA0cgFjSR%2BtOzCkgeNIWBAyAaf0dkooXICRwD8EZrNuRlV3Cx%2F5GVANAiK%2FrwseKtA1IRpNSHzsHg0q5NmAlNt61HcgGgXmPLB%2B3JpmbT0tMqME%2B3dT8fn7jpIR7qPh7sEleGHaGViPwHzIurPvz7hdEyECbK7TjIO50Zdalwg%2BAac0p0ktpELtrNsDcpbBgWGQ49GyWxug5WyRb954PAD3sLcIVcpIRdX3SXfSQY6TozBVvuEfD%2B5D53iKluD%2Fi7MLBEMA3c3i1hKMtvr2GsuvqbyJw%3D%3D",
        price: 99999,
      },
      {
        id: 6,
        title: "美美的拉花",
        imageUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1674949961697.JPG?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J5eMweF%2FXWxKshV%2BI3SpeaxGmHaqCTnAM%2Bi7oAx7ks8ih4uv9bODBbN18QUoOB1jh3pzzEB7QNX9r%2BvWHDJAZrPLZ%2FuJ78kx8hbSp5y5X4wMJr0k9mAFJVFsHC0AeVMi4q1ZaGUJzZheLyTh5y1dfb3FcETbNXXFdF15BxzLRloq0mzEeMZoVSsiEZ7QIo1Epj%2BrA%2BfkFFqhK9KdTOiQpkjyn9jtqDga7gKdpT0%2FbX5TqJB63Lggna7vl4n5WV5KRplSvmHAzSUoqnU0eTbQcRVH48d8C3oTcC7FLp6shO%2Fnw9wxsQwxnh5ZUMsty8cZqXBGqY6b0GtpnOXqzmb74g%3D%3D",
        price: 100,
      },
    ],
  }),
  getters: {
    sortProducts: ({ products }) => {
      return products.sort((a, b) => a.price - b.price);
    },
  },
});
