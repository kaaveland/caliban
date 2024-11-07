package caliban.interop.tapir

import com.github.plokhotnyuk.jsoniter_scala.core.ReaderConfig
import sttp.tapir.json.jsoniter.TapirJsonJsoniter

object MaxCharBufSizeJsonJsoniter extends TapirJsonJsoniter {
  override lazy val readerConfig: ReaderConfig =
    ReaderConfig
      .withAppendHexDumpToParseException(false)
      .withMaxCharBufSize(Int.MaxValue - 2)
      .withMaxBufSize(Int.MaxValue - 2)
}
