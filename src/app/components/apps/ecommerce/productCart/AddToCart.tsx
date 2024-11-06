import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import { useSelector, useDispatch } from "@/store/hooks";
import emptyCart from "/public/images/products/empty-shopping-cart.svg";
import {
  increment,
  deleteCart,
  decrement,
} from "@/store/apps/eCommerce/ECommerceSlice";
import { ProductType } from "../../../../(DashboardLayout)/types/apps/eCommerce";
import Image from "next/image";

const AddToCart = () => {
  const dispatch = useDispatch();

  // Get Products
  const Cartproduct: ProductType[] = useSelector(
    (state) => state.ecommerceReducer.cart
  );
  console.log(Cartproduct);
  const Increase = (productId: number | string) => {
    dispatch(increment(productId));
  };

  const Decrease = (productId: number | string) => {
    dispatch(decrement(productId));
  };

  return (
    <Box>
      {Cartproduct.length > 0 ? (
        <>
          <Box>
            <TableContainer sx={{ minWidth: 350 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>

                    <TableCell align="left">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {Cartproduct.map((product) => (
                    <TableRow key={product.id}>
                      {/* ------------------------------------------- */}
                      {/* Product Image & Title */}
                      {/* ------------------------------------------- */}
                      <TableCell>
                        <Stack direction="row" alignItems="center" gap={2}>
                          <Avatar
                            src={product.photo}
                            alt={product.photo}
                            sx={{
                              borderRadius: "10px",
                              height: "80px",
                              width: "90px",
                            }}
                          />
                          <Box>
                            <Typography variant="h6">
                              {product.title}
                            </Typography>{" "}
                            <Typography color="textSecondary" variant="body1">
                              {product.category}
                            </Typography>
                            <IconButton
                              size="small"
                              color="error"
                              onClick={() => dispatch(deleteCart(product.id))}
                            >
                              <IconTrash size="1rem" />
                            </IconButton>
                          </Box>
                        </Stack>
                      </TableCell>

                      <TableCell>
                        <ButtonGroup
                          size="small"
                          color="success"
                          aria-label="small button group"
                        >
                          <Button
                            onClick={() => Decrease(product.id)}
                            disabled={product.qty < 2}
                          >
                            <IconMinus stroke={1.5} size="0.8rem" />
                          </Button>
                          <Button>{product.qty}</Button>
                          <Button onClick={() => Increase(product.id)}>
                            <IconPlus stroke={1.5} size="0.8rem" />
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="h6">
                          ${product.price * product.qty}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      ) : (
        <Box textAlign="center" mb={3}>
          <Image src={emptyCart} alt="cart" width={200} />
          <Typography variant="h5" mb={2}>
            Cart is Empty
          </Typography>
          <Button
            component={Link}
            href="/apps/ecommerce/shop"
            variant="contained"
          >
            Go back to Shopping
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AddToCart;
