import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

var listPizzas = [];

function renderRow(props) {
  const { index } = props;

  return (
    <ListItem key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`${listPizzas[index]}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList({ pizzaList }) {

  listPizzas = pizzaList;

  return (
    <Box className="fullSize">
      <FixedSizeList
        height={200}
        width={200}
        itemSize={46}
        itemCount={pizzaList.length}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
