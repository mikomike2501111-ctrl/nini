const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

export function generateWhatsAppLink(
  productName: string,
  size?: string,
  color?: string,
  quantity?: number
): string {
  let message = `Hello Eddjos Collections!\n\n`;
  message += `I am interested in purchasing the following product:\n`;
  message += `*Product Name:* ${productName}\n`;

  if (quantity && quantity > 1) {
    message += `*Quantity:* ${quantity}\n`;
  }

  if (size && size !== 'Not specified') {
    message += `*Preferred Size:* ${size}\n`;
  }

  if (color && color !== 'Not specified') {
    message += `*Preferred Color:* ${color}\n`;
  }

  message += `\nCould you please provide me with the following information:\n`;
  message += `1. Confirmation that this product is currently in stock\n`;
  message += `2. All available sizes for this item\n`;
  message += `3. All available colors for this item\n`;
  message += `4. The current price (including any discounts or promotions)\n`;
  message += `5. Estimated delivery time to my location\n`;
  message += `6. Payment methods accepted\n\n`;
  message += `I would like to proceed with the order once I have this information.\n\n`;
  message += `Thank you for your assistance!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function getWhatsAppFloatingLink(): string {
  let message = `Hello Eddjos Collections!\n\n`;
  message += `I am visiting your website and would like to:\n`;
  message += `- Browse your product catalog\n`;
  message += `- Get personalized recommendations\n`;
  message += `- Ask questions about specific items\n`;
  message += `- Place an order\n\n`;
  message += `Please assist me with shopping for your latest collections.\n\n`;
  message += `Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function generateWhatsAppOrderLink(
  items: Array<{ productName: string; quantity: number; size: string; color: string; price: number }>,
  total: number,
  customerInfo: { name: string; email?: string; phone: string; address: string; county?: string; notes?: string }
): string {
  let message = `Hello Eddjos Collections!\n\n`;
  message += `I would like to place an order:\n\n`;
  message += `*Customer Information:*\n`;
  message += `Name: ${customerInfo.name}\n`;
  message += `Phone: ${customerInfo.phone}\n`;
  if (customerInfo.email) {
    message += `Email: ${customerInfo.email}\n`;
  }
  message += `Address: ${customerInfo.address}\n`;
  if (customerInfo.county) {
    message += `County: ${customerInfo.county}\n`;
  }

  message += `\n*Order Items:*\n`;
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.productName}\n`;
    message += `   Quantity: ${item.quantity}\n`;
    message += `   Size: ${item.size}\n`;
    message += `   Color: ${item.color}\n`;
    message += `   Price: KSh ${item.price.toLocaleString()}\n\n`;
  });

  message += `*Order Summary:*\n`;
  message += `Subtotal: KSh ${total.toLocaleString()}\n`;
  message += `Delivery Fee: To be confirmed\n`;
  message += `Total: KSh ${total.toLocaleString()}\n\n`;

  if (customerInfo.notes) {
    message += `*Special Instructions:*\n`;
    message += `${customerInfo.notes}\n\n`;
  }

  message += `Please confirm this order and let me know about:\n`;
  message += `1. Payment methods available\n`;
  message += `2. Estimated delivery time\n`;
  message += `3. Final total with delivery fee\n\n`;
  message += `Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
