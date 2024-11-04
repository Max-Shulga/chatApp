import { IGetAllUpworkFeedRequest } from "@/common/interfaces/dto/upwork-feed/iget-all-upwork-feed-request.interface";
import { IPaginatedRequestDTO } from "@/common/interfaces/dto/common/ipaginated-request.interface";

interface IGetAllUpworkFeedCombineRequest
  extends IGetAllUpworkFeedRequest,
    IPaginatedRequestDTO {}

export default IGetAllUpworkFeedCombineRequest;
