import { IInfoBlockInterfaceDto } from "@/common/interfaces/dto/web-document/iinfo-block.interface.dto";
import InfoBlockKeys from "@/common/enums/upwork-feed/upwork-type-info-block.enum";

type ProcessValueFunction = (
  value: string,
  key: keyof typeof InfoBlockKeys,
) => string;

function transformInfoBlock(
  infoBlock: IInfoBlockInterfaceDto[],
  processValue: ProcessValueFunction,
): Record<keyof typeof InfoBlockKeys, { key: string; value: string }> {
  return infoBlock.reduce(
    (acc, item) => {
      const enumKey = item.key as keyof typeof InfoBlockKeys;
      if (InfoBlockKeys[enumKey]) {
        const formattedKey = InfoBlockKeys[enumKey];

        acc[enumKey] = {
          key: formattedKey,
          value: processValue(item.value, enumKey),
        };
      }

      return acc;
    },
    {} as Record<keyof typeof InfoBlockKeys, { key: string; value: string }>,
  );
}
export default transformInfoBlock;
