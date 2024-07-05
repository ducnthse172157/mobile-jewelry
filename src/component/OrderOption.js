import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { t } from "react-native-tailwindcss";
import Popup from "./Popup";
import { UpdateOrder } from "../service/Order";
import { useToast } from "./Toast";

const OrderOption = ({ isVisible, onClose, order, refreshOrders }) => {
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [isPaymentFormVisible, setIsPaymentFormVisible] = useState(false);
  const [cashPaid, setCashPaid] = useState(order.cashPaid);
  const [bankPaid, setBankPaid] = useState(order.bankPaid);
  const [description, setDescription] = useState(order.description);
  const toast = useToast();

  const handleCancelOrder = async () => {
    try {
      await UpdateOrder(order._id, { status: 'cancelled' });
      await refreshOrders();
      toast.current.show("Order cancelled successfully");
      onClose();
    } catch (error) {
      console.error('Error cancelling order:', error);
    }
  };

  const handleUpdatePayment = async () => {
    try {
      await UpdateOrder(order._id, { 
        ...order, 
        status: 'paid', 
        cashPaid: parseFloat(cashPaid), 
        bankPaid: parseFloat(bankPaid), 
        description 
      });
      await refreshOrders();
      toast.current.show("Payment updated successfully");
      onClose();
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  return (
    <Popup isVisible={isVisible} onClose={onClose} title="Order Options">
      {!isConfirmationVisible && !isPaymentFormVisible && (
        <View>
          <Pressable
            onPress={() => setIsConfirmationVisible(true)}
            style={[t.p2, t.bgRed500, t.rounded, t.mB2]}
          >
            <Text style={[t.textWhite, t.textCenter]}>Cancel Order</Text>
          </Pressable>
          <Pressable
            onPress={() => setIsPaymentFormVisible(true)}
            style={[t.p2, t.bgGreen500, t.rounded]}
          >
            <Text style={[t.textWhite, t.textCenter]}>Mark as Paid</Text>
          </Pressable>
        </View>
      )}
      {isConfirmationVisible && (
        <View>
          <Text style={[t.textLg, t.textCenter, t.mB4]}>
            Are you sure you want to cancel this order?
          </Text>
          <Pressable
            onPress={handleCancelOrder}
            style={[t.p2, t.bgRed500, t.rounded, t.mB2]}
          >
            <Text style={[t.textWhite, t.textCenter]}>Confirm Cancel</Text>
          </Pressable>
          <Pressable
            onPress={() => setIsConfirmationVisible(false)}
            style={[t.p2, t.bgGray500, t.rounded]}
          >
            <Text style={[t.textWhite, t.textCenter]}>Go Back</Text>
          </Pressable>
        </View>
      )}
      {isPaymentFormVisible && (
        <View>
          <TextInput
            style={[t.border, t.borderGray300, t.rounded, t.p2, t.mB2]}
            placeholder="Cash Paid"
            value={String(cashPaid)}
            onChangeText={(value) => setCashPaid(value)}
            keyboardType="numeric"
          />
          <TextInput
            style={[t.border, t.borderGray300, t.rounded, t.p2, t.mB2]}
            placeholder="Bank Paid"
            value={String(bankPaid)}
            onChangeText={(value) => setBankPaid(value)}
            keyboardType="numeric"
          />
          <TextInput
            style={[t.border, t.borderGray300, t.rounded, t.p2, t.mB4]}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <Pressable
            onPress={handleUpdatePayment}
            style={[t.p2, t.bgGreen500, t.rounded, t.mB2]}
          >
            <Text style={[t.textWhite, t.textCenter]}>Update Payment</Text>
          </Pressable>
          <Pressable
            onPress={() => setIsPaymentFormVisible(false)}
            style={[t.p2, t.bgGray500, t.rounded]}
          >
            <Text style={[t.textWhite, t.textCenter]}>Go Back</Text>
          </Pressable>
        </View>
      )}
    </Popup>
  );
};

export default OrderOption;

