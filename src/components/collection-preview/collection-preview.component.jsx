import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss';
import {CollectionPreviewStyle, Title, Preview} from './collection-preview.style';

const CollectionPreview =( {title,items}) =>( 

   <CollectionPreviewStyle>
         <Title>{title.toUpperCase()}</Title>
                <Preview>

                    {
                        items
                        .filter((item,idx)=> idx<4)
                        .map((item)=>(
                            <CollectionItem key={item.id} item={item} />
                        )) 
                    }

                </Preview>
   </CollectionPreviewStyle>
)


export default CollectionPreview;