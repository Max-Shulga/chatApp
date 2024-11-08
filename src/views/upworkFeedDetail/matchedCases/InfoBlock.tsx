import { IInfoBlockInterfaceDto } from "@/common/interfaces/dto/web-document/iinfo-block.interface.dto";
import { ReactElement } from "react";
import transformInfoBlock from "@/utils/upworkFeedDetail/transformInfoBlock";
import processValue from "@/utils/upworkFeedDetail/processValue";

type InfoBlockProps = {
  infoBlock: IInfoBlockInterfaceDto[];
};

function InfoBlock({ infoBlock }: InfoBlockProps): ReactElement {
  const processedInfoObject = transformInfoBlock(infoBlock, processValue);
  const infoKeys = [
    "Published",
    "Platforms",
    "Devices",
    "Tech stack",
    "Scope of work",
  ];
  return (
    <div className="flex flex-col gap-2 w-11/12">
      {infoKeys.map((key) => {
        const infoItem =
          processedInfoObject[key as keyof typeof processedInfoObject];
        return (
          infoItem?.value && (
            <div key={key} className="flex">
              <h4 className="text-grays-700 font-normal min-w-[120px]">
                {infoItem.key}
              </h4>
              <p>{infoItem.value}</p>
            </div>
          )
        );
      })}
    </div>
  );
}

export default InfoBlock;
