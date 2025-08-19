import Box from "@/components/Box";
import { category_mock_data } from "@/constants/search";
import React from "react";
import Text from "../Text";

const Categories = () => {
  return (
    <Box mt={40}>
      <Text font={18} weight={"bold"}>
        {category_mock_data.heading}
      </Text>
      <Box mt={20} flexDirection="row" flexWrap="wrap" style={{ gap: 8 }}>
        {category_mock_data.data.map((item, index) => (
          <Box
            key={index}
            bgColor="bg"
            ph={15}
            pv={8}
            radius={20}
            borderColor="borderLight"
            borderWidth={1}
          >
            <Text font={13} weight={"500"}>
              {item}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
