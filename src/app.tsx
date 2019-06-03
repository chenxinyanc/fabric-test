import * as React from "react";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { Customizer } from "office-ui-fabric-react";
import { FluentCustomizations } from "@uifabric/fluent-theme";
import { MessageBar, MessageBarType } from "office-ui-fabric-react/lib/MessageBar";
import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu";

export class App extends React.Component {

    public render() {
        return (<Customizer {...FluentCustomizations}>
            <h1>Test!</h1>
            <MessageBar messageBarType={MessageBarType.info}>This is a test message bar.</MessageBar>
            <DefaultButton text="Show menu" menuProps={{
                shouldFocusOnMount: true, items: [
                    { key: "header", text: "ContextualMenu", itemType: ContextualMenuItemType.Header },
                    { key: "item1", text: "Item 1" },
                    { key: "item2", text: "Item 2" },
                    { key: "item3", text: "Item 3" },
                    { key: "divider1", itemType: ContextualMenuItemType.Divider },
                    { key: "item4", text: "Item 4" },
                    { key: "item5", text: "Item 5" },
                ]
            }} />
        </Customizer>);
    }

}
