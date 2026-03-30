export enum AddressType {
  Home = 0,
  Work = 1,
  Other = 2,
}

export enum ServiceType {
  Car = 0,
  Bike = 1,
  LongDistance = 2,
}

export enum ServiceForm {
  Basic = "BASIC",
  Province = "PROVINCE",
  Phone = "PHONE",
  Webview = "WEBVIEW",
  PartnerBook = "PARTNER_BOOK",
  ColdFine = "COLD_FINE",
}

// progress : trạng thái chuyến
// - 1: tx đã nhận chuyến
// - 2: tx đã đến điểm đón
// - 3: chuyến hoàn thành
// - 4: chuyến huỷ do khách
// - 5: tx đã đón khách
// - 6: chuyến huỷ do tx
// - 7: tx nhận hàng (food và giao hàng)
export enum ProgressType {
  NONE = 0,
  DRIVER_TO_PICKUP_ADDRESS = 1,
  GOING_TO_DROP_ADDRESS = 2,
  FINISH = 3,
  USER_CANCEL = 4,
  DRIVER_HAS_PICKED_UP_CUSTOMER = 5,
  DRIVER_CANCEL = 6,
  DRIVER_RECEIVES_GOODS = 7,
}

// payment : phương thức thanh toán
// - 1 : Tiền mặt
// - 2 : Zalopay
export enum PaymentmethodType {
  NONE = 0,
  COD = 1,
  ZLP = 2,
}
