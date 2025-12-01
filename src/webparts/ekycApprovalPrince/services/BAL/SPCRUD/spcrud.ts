import "@pnp/sp/lists";
import "@pnp/sp/items";
// import { IPatelEngProps } from "../../components/IPatelEngProps";
import { IEkycApprovalPrinceProps } from "../../../components/IEkycApprovalPrinceProps";
import SPCRUDOPS from "../../DAL/spcrudops";

export interface ISPCRUD {
    getData(listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string, orderby: { column: string, isAscending: boolean }, top: number, props: IEkycApprovalPrinceProps): Promise<any>;
    getRootData(listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string, orderby: { column: string, isAscending: boolean }, top: number, props: IEkycApprovalPrinceProps): Promise<any>;
    insertData(listName: string, data: any, props: IEkycApprovalPrinceProps): Promise<any>;
    updateData(listName: string, itemId: number, data: any, props: IEkycApprovalPrinceProps): Promise<any>;
    deleteData(listName: string, itemId: number, props: IEkycApprovalPrinceProps): Promise<any>;
    getListInfo(listName: string, props: IEkycApprovalPrinceProps): Promise<any>;
    getListData(listName: string, columnsToRetrieve: string, props: IEkycApprovalPrinceProps): Promise<any>;
    batchInsert(listName: string, data: any, props: IEkycApprovalPrinceProps): Promise<any>;
    batchUpdate(listName: string, data: any, props: IEkycApprovalPrinceProps): Promise<any>;
    batchDelete(listName: string, data: any, props: IEkycApprovalPrinceProps): Promise<any>;
    createFolder(listName: string, folderName: string, props: IEkycApprovalPrinceProps): Promise<any>;
    uploadFile(folderServerRelativeUrl: string, file: File, props: IEkycApprovalPrinceProps): Promise<any>;
    deleteFile(fileServerRelativeUrl: string, props: IEkycApprovalPrinceProps): Promise<any>;
    currentProfile(props: IEkycApprovalPrinceProps): Promise<any>;
    getLoggedInSiteGroups(props: IEkycApprovalPrinceProps): Promise<any>;
    getAllSiteGroups(props: IEkycApprovalPrinceProps): Promise<any>;
    getTopData(listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
        , orderby: { column: string, isAscending: boolean }, top: number, props: IEkycApprovalPrinceProps): Promise<any>;
    addAttchmentInList(attFiles: File, listName: string, itemId: number, fileName: string, props: IEkycApprovalPrinceProps): Promise<any>;

}

export default async function USESPCRUD(): Promise<ISPCRUD> {
    const spCrudOps = await SPCRUDOPS();
    return {
        getData: async (listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
            , orderby: { column: string, isAscending: boolean }, top: number, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.getData(listName, columnsToRetrieve, columnsToExpand, filters, orderby, props);
        },
        getRootData: async (listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
            , orderby: { column: string, isAscending: boolean }, top: number, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.getData(listName, columnsToRetrieve, columnsToExpand, filters, orderby, props);
        },
        insertData: async (listName: string, data: any, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.insertData(listName, data, props);
        },
        updateData: async (listName: string, itemId: number, data: any, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.updateData(listName, itemId, data, props);
        },
        deleteData: async (listName: string, itemId: number, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.deleteData(listName, itemId, props);
        },
        getListInfo: async (listName: string, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.getListInfo(listName, props);
        },
        getListData: async (listName: string, columnsToRetrieve: string, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.getListData(listName, columnsToRetrieve, props);
        },
        batchInsert: async (listName: string, data: any, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.batchInsert(listName, data, props);
        },
        batchUpdate: async (listName: string, data: any, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.batchUpdate(listName, data, props);
        },
        batchDelete: async (listName: string, data: any, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.batchDelete(listName, data, props);
        },
        createFolder: async (listName: string, folderName: string, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.createFolder(listName, folderName, props);
        },
        uploadFile: async (folderServerRelativeUrl: string, file: File, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.uploadFile(folderServerRelativeUrl, file, props);
        },
        deleteFile: async (fileServerRelativeUrl: string, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.deleteFile(fileServerRelativeUrl, props);
        },
        currentProfile: async (props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.currentProfile(props);
        },

        getLoggedInSiteGroups: async (props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.getLoggedInSiteGroups(props);
        },
        getAllSiteGroups: async (props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.getAllSiteGroups(props);
        },
        getTopData: async (listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
            , orderby: { column: string, isAscending: boolean }, top: number, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.getTopData(listName, columnsToRetrieve, columnsToExpand, filters, orderby, top, props);
        },
        addAttchmentInList: async (attFiles: File, listName: string, itemId: number, fileName: string, props: IEkycApprovalPrinceProps) => {
            return await spCrudOps.addAttchmentInList(attFiles, listName, itemId, fileName, props);
        }
    };
}