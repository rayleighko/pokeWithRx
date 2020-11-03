type QueueModel = {
    id?: string;
    application?: string;
    layout?: string;
    name?: "대기열";
    size?: number;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?: boolean | number;
}

type QueuesModel = QueueModel[]

type WaiterModel = {
    id?: string,
    order?: string
    destination?: string
    variables?: object
}

type WaitersModel = WaiterModel[]

export type { QueueModel, QueuesModel, WaiterModel, WaitersModel }