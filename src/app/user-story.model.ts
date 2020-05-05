export class UserStory {
    ItemId: string;
    ItemName: string;
    Description: string;
    Assignee: string;
    EndDate: string;
    StartDate: string;
    Status: string;
    Duration: string;
    Epic: string;
    EstimationPoints: string;
    Priority: string;
    ItemType: string;
    Relatedto: string;
    ParentId: string;
    index: number;
    relatedToIndex: number;
    constructor(data: string[]) {

        this.ItemId = data[0];
        this.ItemName = data[1];
        this.Description = data[2];
        this.Assignee = data[3];
        this.EndDate = data[4];
        this.StartDate = data[5];
        this.Status = data[6];
        this.Duration = data[7];
        this.Epic = data[8];
        this.EstimationPoints = data[9];
        this.Priority = data[10];
        this.ItemType = data[11];
        this.Relatedto = data[12];
        this.ParentId = data[14];
    }
}