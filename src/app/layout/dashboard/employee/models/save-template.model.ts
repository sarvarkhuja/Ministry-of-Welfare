import { TemplateColumn } from './get-template-columns';
export interface SaveTemplate {
    templateId: number;
    templateName: string;
    userId: number; // static
    pageId: number; // static
    columns: TemplateColumn[];
}

