import React, { useState, useEffect } from 'react'
import { ListRow, NotfoundContainer, BackBtn, ItemDetailModal } from './style';
import {PageBlockHeader, Container, ListWrapper } from '../../styles/main';
import ItemDetail from './itemDetail';

import ItemList from './itemList';


const ListContainer = (props) => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});

    const listHandler = (event, data) => {
        if(props.category === 'landing') {
            setData(data);
            setShow(event);
            document.body.style.overflow = "hidden";
        } else {
            props.handleClick(data)
        }
    }

    const hideItemDetail = () => {
        setShow(false);
        setData({});
        document.body.style.overflow = "visible";
    }
    
    const Notfound = () => {
        return <NotfoundContainer>No templates found</NotfoundContainer>
    }
 
    return (
        <>
        <PageBlockHeader>
            <Container>
                {/* <Flex justifyBetween contentCenter> */}
                    <h2>Selecione o modelo</h2>
                    <BackBtn onClick={()=> props.back('category')}>
                        Voltar 
                    </BackBtn>
                {/* </Flex> */}
            </Container>
        </PageBlockHeader>
        <ListWrapper>
            <Container>
                <ListRow>
                    {!props.data.length>0 ? <Notfound /> : <ItemList category={props.category} data={props.data} itemHandler={listHandler} />}
                    { show && <ItemDetail onClose={() => hideItemDetail()} show={show} content={data} itemHandler={props.handleClick}/>  }
                    
                </ListRow>
            </Container>
        </ListWrapper>
        </>
    )
}

export default ListContainer;