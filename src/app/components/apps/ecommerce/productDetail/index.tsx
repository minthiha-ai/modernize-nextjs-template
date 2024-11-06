import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams  } from "next/navigation";
import Link from "next/link";

// MUI Elements
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Fab from '@mui/material/Fab'
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

import {  useSelector, useDispatch } from "@/store/hooks";
import { AppState } from "@/store/store";
import {
  fetchProducts,
  addToCart,
} from "@/store/apps/eCommerce/ECommerceSlice";
import { IconCheck, IconMinus, IconPlus } from "@tabler/icons-react";
import AlertCart from "../productCart/AlertCart";
import { ProductType } from "../../../../(DashboardLayout)/types/apps/eCommerce";

const ProductDetail = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = usePathname();
  
  const getTitle: string | any = router.split('/').pop();
  
  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Get Products
  const product: ProductType | any = useSelector(
    (state: AppState) => state.ecommerceReducer.products[getTitle - 1]
  );

  /// select colors on click
  const [scolor, setScolor] = useState(product ? product.colors[0] : "");
  const setColor = (e: string) => {
    setScolor(e);
  };

  //set qty
  const [count, setCount] = useState(1);

  // for alert when added something to cart
  const [cartalert, setCartalert] = React.useState(false);

  const handleClick = () => {
    setCartalert(true);
  };

  const handleClose = (reason: string) => {
    if (reason === "clickaway") {
      return;
    }
    setCartalert(false);
  };
  return (
    <Box p={2}>
      {product ? (
        <>
          <Box display="flex" alignItems="center">
            {/* ------------------------------------------- */}
            {/* Badge and category */}
            {/* ------------------------------------------- */}
            <Chip label="In Stock" color="success" size="small" />
            <Typography
              color="textSecondary"
              variant="caption"
              ml={1}
              textTransform="capitalize"
            >
              {product?.category}
            </Typography>
          </Box>
          {/* ------------------------------------------- */}
          {/* Title and description */}
          {/* ------------------------------------------- */}
          <Typography fontWeight="600" variant="h4" mt={1}>
            {product?.title}
          </Typography>
          <Typography
            variant="subtitle2"
            mt={1}
            color={theme.palette.text.secondary}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex
            arcu, tincidunt bibendum felis.
          </Typography>
          {/* ------------------------------------------- */}
          {/* Price */}
          {/* ------------------------------------------- */}
          <Typography mt={2} variant="h4" fontWeight={600}>
            <Box
              component={"small"}
              color={theme.palette.text.secondary}
              sx={{ textDecoration: "line-through" }}
            >
              ${product.salesPrice}
            </Box>{" "}
            ${product.price}
          </Typography>
          {/* ------------------------------------------- */}
          {/* Ratings */}
          {/* ------------------------------------------- */}
          <Stack direction={"row"} alignItems="center" gap="10px" mt={2} pb={3}>
            <Rating
              name="simple-controlled"
              size="small"
              value={product.rating}
              readOnly
            />
            <Link href="/" color="inherit">
              (236 reviews)
            </Link>
          </Stack>
          <Divider />
          {/* ------------------------------------------- */}
          {/* Colors */}
          {/* ------------------------------------------- */}
          <Stack py={4} direction="row" alignItems="center">
            <Typography variant="h6" mr={1}>
              Colors:
            </Typography>
            <Box>
              {product.colors.map((color: any) => (
                <Fab
                  color="primary"
                  sx={{
                    transition: "0.1s ease-in",
                    scale: scolor === color ? "0.9" : "0.7",
                    backgroundColor: `${color}`,
                    "&:hover": {
                      backgroundColor: `${color}`,
                      opacity: 0.7,
                    },
                  }}
                  size="small"
                  key={color}
                  onClick={() => setColor(color)}
                >
                  {scolor === color ? <IconCheck size="1.1rem" /> : ""}
                </Fab>
              ))}
            </Box>
          </Stack>
          {/* ------------------------------------------- */}
          {/* Qty */}
          {/* ------------------------------------------- */}
          <Stack direction="row" alignItems="center" pb={5}>
            <Typography variant="h6" mr={4}>
              QTY:
            </Typography>
            <Box>
              <ButtonGroup
                size="small"
                color="secondary"
                aria-label="small button group"
              >
                <Button
                  key="one"
                  onClick={() => setCount(count < 2 ? count : count - 1)}
                >
                  <IconMinus size="1.1rem" />
                </Button>
                <Button key="two">{count}</Button>
                <Button key="three" onClick={() => setCount(count + 1)}>
                  <IconPlus size="1.1rem" />
                </Button>
              </ButtonGroup>
            </Box>
          </Stack>
          <Divider />
          {/* ------------------------------------------- */}
          {/* Buttons */}
          {/* ------------------------------------------- */}
          <Grid container spacing={2} mt={3}>
            <Grid item xs={12} lg={4} md={6}>
              <Button
                color="primary"
                size="large"
                fullWidth
                component={Link}
                variant="contained"
                href="/apps/eco-checkout"
                onClick={() => dispatch(addToCart(product))}
              >
                Buy Now
              </Button>
            </Grid>
            <Grid item xs={12} lg={4} md={6}>
              <Button
                color="error"
                size="large"
                fullWidth
                variant="contained"
                onClick={() => dispatch(addToCart(product)) && handleClick()}
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
          <Typography color="textSecondary" variant="body1" mt={4}>
            Dispatched in 2-3 weeks
          </Typography>
          <Link href="/" color="inherit">
            Why the longer time for delivery?
          </Link>
          {/* ------------------------------------------- */}
          {/* Alert When click on add to cart */}
          {/* ------------------------------------------- */}
          <AlertCart handleClose={handleClose} openCartAlert={cartalert} />
        </>
      ) : (
        "No product"
      )}
    </Box>
  );
};

export default ProductDetail;
