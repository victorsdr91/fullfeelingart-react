export class Widget {
    id: number;
    widgetName: string;
    enabled: boolean;
    info: {
        title: string,
        description: string
    };

    constructor(id, widgetName, {title, description}) {
        this.id = id;
        this.widgetName = widgetName;
        this.info = {
            title,
            description
        };
        this.enabled = true;
    }

    setTitle(title: string) {
        this.info.title = title;
        return this;
    }

    setDescription(description: string) {
        this.info.description = description;
        return this;
    }

    setEnabled(enabled: boolean) {
        this.enabled = enabled;
        return this;
    }

    isEnabled() {
        return this.enabled;
    }
};