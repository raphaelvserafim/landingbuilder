import React from 'react';
import {
    ItemDetailField,
    ItemDetailGroup,
    WidgetTitle
} from './style';
import { Input } from "../../styles/main";

const ItemWidgets = (props) => {

    return (
        <ItemDetailGroup>
            <WidgetTitle>Configurações de widgets:</WidgetTitle>
            <ItemDetailField>
                <label> Buyers looking through the product now</label>
                <Input
                    type="text"
                    pattern="^\d+$"
                    name="onlineVisitorsNum"
                    value={props.fields.onlineVisitorsNum}
                    onChange={props.handleFieldChange} />
            </ItemDetailField>
            <ItemDetailField>
                <label>{'Maximum time period to buy on the website (msec)'}</label>
                <Input
                    type="text"
                    pattern="^\d+$"
                    name="maxTimeToBuy"
                    value={props.fields.maxTimeToBuy}
                    onChange={props.handleFieldChange} />
            </ItemDetailField>

            <ItemDetailField>
                <label>{'Minimum time period to buy on the website (msec)'}</label>
                <Input
                    type="text"
                    pattern="^\d+$"
                    name="minTimeToBuy"
                    value={props.fields.minTimeToBuy}
                    onChange={props.handleFieldChange} />
            </ItemDetailField>
            <ItemDetailField>
                <label>{'Product pieces left'} </label>
                <Input
                    type="text"
                    pattern="^\d+$"
                    name="startCount"
                    value={props.fields.startCount}
                    onChange={props.handleFieldChange} />
            </ItemDetailField>

            <ItemDetailField>
                <label>{'Maximum purchases for a day'}</label>
                <Input
                    type="text"
                    pattern="^\d+$"
                    name="maxSaleCount"
                    value={props.fields.maxSaleCount}
                    onChange={props.handleFieldChange} />
            </ItemDetailField>

            <ItemDetailField>
                <label>{'Visitors today'}</label>
                <Input
                    type="text"
                    pattern="^\d+$"
                    name="totalVisitors"
                    value={props.fields.totalVisitors}
                    onChange={props.handleFieldChange} />
            </ItemDetailField>

            <ItemDetailField>
                <label>{`Today's purchases`}</label>
                <Input
                    type="text"
                    pattern="^\d+$"
                    name="buyVisitorsNum"
                    value={props.fields.buyVisitorsNum}
                    onChange={props.handleFieldChange} />
            </ItemDetailField>

            <ItemDetailField>
                <label>{'We froze exchange rate for purchase'}</label>
                <Input
                    type="text"
                    pattern="."
                    name="frozenDescription"
                    value={props.fields.frozenDescription}
                    onChange={props.handleFieldChange} />
            </ItemDetailField>
        </ItemDetailGroup>
    )

}

export default ItemWidgets;