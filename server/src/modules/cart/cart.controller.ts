import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Request,
  UseGuards,
  Put,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import products, { Product } from 'src/entity/products';

interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}

const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map((index) => ({
    ...products[index],
    quantity: 1,
  })),
});

@Controller('cart')
export class CartController {
  private carts: Record<number, Cart> = {
    1: initialCart([0, 2, 4]),
    2: initialCart([1, 3]),
  };
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { cartItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() { id }: { id: string }): Promise<Cart> {
    const cart = this.carts[req.user.userId];
    const cartItem = cart.cartItems.find(
      (cartItem) => cartItem.id === parseInt(id),
    );
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.cartItems.push({
        ...products.find((product) => product.id === parseInt(id)),
        quantity: 1,
      });
    }
    return cart;
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  async deleteItem(
    @Request() req,
    @Body() { id }: { id: string },
  ): Promise<Cart> {
    const cart = this.carts[req.user.userId];
    const cartItem = cart.cartItems.find(
      (cartItem) => cartItem.id === parseInt(id),
    );
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
      var idx = cart.cartItems.indexOf(cartItem);
      console.log('Index of item to be removed :', idx);
      if (idx === 0) cart.cartItems.splice(idx, 1);
      else {
        cart.cartItems.splice(idx, 1);
      }
    }
    return cart;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async destroy(@Request() req): Promise<Cart> {
    this.carts[req.user.userId] = { cartItems: [] };
    return this.carts[req.user.userId];
  }
}
