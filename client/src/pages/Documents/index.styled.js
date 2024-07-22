import styled from "styled-components";


export const DocumentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 5px;
    padding: 5px;
    background-color: #61dafb;
    border: 1px red dotted;
    border-radius: 10px;
    height: 100vh;
    gap: 5px;
    
    .header {
        display: flex;
        width: 100%;
        height: 10%;
        border-radius: 5px;
        background-color: beige;
        gap: 10px;
        .search {
            display: flex;
            width: 20%;
            height: 100%;
            border-radius: 3px;
            background-color: slategrey;
        }
        .filters {
            display: flex;
            width: 70%;
            height: 100%;
            border-radius: 3px;
            background-color: slategrey;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 30%;
            height: 100%;
            border-radius: 3px;
            background-color: slategrey;
            gap: 10px;
            padding: 0 20px; 
        }
    }
    .content {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
        border-radius: 5px;
        background-color: teal;
        
        .document-item {
            display: flex;
            min-width: 250px;
            height: 80px;
            justify-content: flex-start;
            align-items: center;
            padding: 0 5px;
            background-color: beige;
            border-radius: 7px;
            border: 1px solid slategrey;
            margin: 10px;
            gap: 20px;
            
            .document-item-item {
                width: 80px;
                height: 100%;
                border-right: 2px red solid;
                background-color: #61dafb;
            }
        }
    }

    /* For screens larger than 900px */
    @media only screen and (min-width: 900px) {
        .content {
            justify-content: flex-start;
        }
    }
`;