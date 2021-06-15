import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './ItemCard.css';
import goldCoin from './images/money-gold.gif';
import silverCoin from './images/money-silver.gif';
import copperCoin from './images/money-copper.gif';

function ItemCard(props) {

    const [item, setItem] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const searchItem = (e) => {
        return axios({
            method: 'get',
            url: `https://eu.api.blizzard.com/data/wow/item/${e}?namespace=static-classic-eu&locale=en_US&access_token=USXul87N1EqDWmZBF4q7CeuGpddjRJ2Yyc`
        })
            .then(function (response) {
                setItem(response.data);
                getImage(response.data.media.id);
            })
            .catch(function (error) {
                return null;
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

    const getImage = (e) => {
        return axios({
            method: 'get',
            url: `https://us.api.blizzard.com/data/wow/media/item/${e}?namespace=static-classic-us&locale=en_US&access_token=USXul87N1EqDWmZBF4q7CeuGpddjRJ2Yyc`
        })
            .then(function (response) {
                setImageUrl(response.data.assets[0].value)
                // setImageUrl(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        searchItem(props.props.id);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="item-card" style={{ display: 'flex' }} onClick={() => { props.handleRouter(item) }}>
            <Card style={{ maxWidth: '3.5rem', minWidth: '3.5rem', maxHeight: '3.5rem', minHeight: '3.5rem', marginTop: '2vh', background: `url(${imageUrl})` }} />
            <Card style={{ maxWidth: '15rem', margin: '2vh', marginLeft: '5px', minWidth: '15rem' }}>
                <Card.Body>
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
        </div>
    );
}

export default ItemCard;