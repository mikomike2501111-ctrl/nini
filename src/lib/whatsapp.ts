const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

export function generateWhatsAppLink(
  productName: string,
  size?: string,
  color?: string
): string {
  let message = `Hello Eddjos Collections!\n\n`;
  message += `I am interested in purchasing the following product:\n`;
  message += `*Product Name:* ${productName}\n\n`;

  if (size) {
    message += `*Preferred Size:* ${size}\n`;
  }

  if (color) {
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
