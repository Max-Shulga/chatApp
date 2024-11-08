import { ReactElement } from "react";
import { IInfoBlockInterfaceDto } from "@/common/interfaces/dto/web-document/iinfo-block.interface.dto";
import convertToDateFormat from "@/utils/upworkFeedDetail/convertToDateFormat";

type MatchedInfoBlockProps = {
  infoBlock: IInfoBlockInterfaceDto[];
};
function MatchedInfoBlock({ infoBlock }: MatchedInfoBlockProps): ReactElement {
  return (
    <div className="flex flex-col gap-2 w-11/12">
      {infoBlock.map(
        (info) =>
          info.value && (
            <div key={info.value} className="flex">
              <h4 className="text-grays-700 font-normal min-w-[120px]">
                {info.key}:
              </h4>
              <p>
                {info.key === "Published"
                  ? convertToDateFormat(info.value)
                  : info.value}
              </p>
            </div>
          ),
      )}
    </div>
  );
}
export default MatchedInfoBlock;
