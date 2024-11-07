package caliban.interop.tapir

import caliban.{ GraphQLRequest, ResponseValue }
import sttp.tapir.Codec.JsonCodec
import MaxCharBufSizeJsonJsoniter._

private object JsonCodecs {
  import caliban.interop.jsoniter.ValueJsoniter.stringListCodec

  val listMapCodec: JsonCodec[Map[String, List[String]]] = implicitly
  val requestCodec: JsonCodec[GraphQLRequest]            = implicitly
  val responseCodec: JsonCodec[ResponseValue]            = implicitly
}
