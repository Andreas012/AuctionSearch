import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './ItemCard.css';
import goldCoin from './images/money-gold.gif';
import silverCoin from './images/money-silver.gif';
import copperCoin from './images/money-copper.gif';

function ItemCard(props) {

    const searchItem = (e) => {
        return axios({
            method: 'get',
            url: `https://us.api.blizzard.com/data/wow/item/${e}?namespace=static-classic-us&locale=en_US&access_token=USXul87N1EqDWmZBF4q7CeuGpddjRJ2Yyc`
        })
            .then(function (response) {
                setItem(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getColor = () => {
        switch (props.props.quality.name.en_GB) {
            case 'Poor':
                return 'grey'
            case 'Common':
                return 'white'
            case 'Uncommon':
                return '#1eff00'
            case 'Rare':
                return '#0070dd'
            case 'Epic':
                return '#a335ee'
            case 'Legendary':
                return '#ff8000'
            default:
                return 'white'
        }
    }

    const [item, setItem] = useState(null);

    useEffect(() => {
        searchItem(props.props.id);
        // eslint-disable-next-line
    }, []);

    return (
        < Card style={{ maxWidth: '15rem', margin: '2vh', minWidth: '15rem' }}>
            <Card.Body>
                {console.log(item)}
                <Card.Title style={{ color: getColor() }}>{props.props.name.en_GB}</Card.Title>
                <Card.Text className="item-level">{item !== null && item.level !== undefined ? 'Item Level ' + item.level : null}</Card.Text>
                <Card.Text className="binding">{item !== null && item.preview_item.binding !== undefined ? item.preview_item.binding.name : null}</Card.Text>
                <Card.Text className="quantity">{item !== null && item.preview_item.unique_equipped !== null ? item.preview_item.unique_equipped : null}</Card.Text>
                <div className="type-div">
                    <Card.Text className="type">{item !== null && item.preview_item.inventory_type.name !== null ? item.preview_item.inventory_type.name : null}</Card.Text>
                    <Card.Text className="weapon-type">{item !== null && item.item_subclass.name !== null ? item.item_subclass.name : null}</Card.Text>
                </div>
                <Card.Text className="useEffect">{item !== null && item.preview_item.spells !== undefined ? item.preview_item.spells[0].description : null}</Card.Text>
                <Card.Text className="sellPrice">
                    {item !== null && item.preview_item.sell_price !== undefined ? 'Sell Price' : null}
                    {item !== null && item.preview_item.sell_price !== undefined && parseInt(item.preview_item.sell_price.display_strings.gold) > 0 ? <> {item.preview_item.sell_price.display_strings.gold}<img src={goldCoin} alt="" /> </> : null}
                    {item !== null && item.preview_item.sell_price !== undefined && parseInt(item.preview_item.sell_price.display_strings.silver) > 0 ? <> {item.preview_item.sell_price.display_strings.silver}<img src={silverCoin} alt="" /> </> : null}
                    {item !== null && item.preview_item.sell_price !== undefined && parseInt(item.preview_item.sell_price.display_strings.copper) > 0 ? <> {item.preview_item.sell_price.display_strings.copper}<img src={copperCoin} alt="" /> </> : null}
                </Card.Text>
            </Card.Body>
        </Card >
    );
}

export default ItemCard;