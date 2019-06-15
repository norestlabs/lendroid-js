export declare const fetchOrders: (base: any, callback: any) => void;
export declare const createOrder: (base: any, data: any, callback: any) => void;
export declare const fillOrderServer: (base: any, { id, value, txHash }: {
    id: any;
    value: any;
    txHash: any;
}, callback: any) => void;
export declare const deleteOrder: (base: any, { id, txHash }: {
    id: any;
    txHash: any;
}, callback: any) => void;
