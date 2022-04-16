import React from "react";
import { FilterBar } from "scorer-ui-kit";
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const FilterBarComp = () => {
    return (
      <Container>
        <FilterBar
          clearText="CLEAR ALL"
          datePickersConfig={[
            {
              positionStart: false,
              buttonIcon: "DateTime",
              buttonText: "Date Range",
              dateMode: "interval",
              dateTimeTextLower: "To",
              dateTimeTextUpper: "From",
              id: "datePickerForRuntime",
              timeMode: "off",
            },
          ]}
          dropdownsConfig={[
            {
              buttonIcon: "Camera",
              buttonText: "Status",
              id: "dropdownForStatus",
              list: [
                {
                  text: "OK",
                  value: "good",
                },
                {
                  text: "Caution",
                  value: "caution",
                },
                {
                  text: "Warning",
                  value: "danger",
                },
                {
                  text: "Offline",
                  value: "neutral",
                },
              ],
              loadingText: "Loading Status ...",
              optionType: "checkbox",
              searchPlaceholder: "Status...",
              searchResultText: "Showing [VISIBLE] of [TOTAL]",
            },
            {
              buttonIcon: "Usage",
              buttonText: "Cost",
              canHide: true,
              id: "priceFilter",
              list: [
                {
                  text: "Less than 5000",
                  value: 5000,
                },
                {
                  text: "Less than 10000",
                  value: 10000,
                },
                {
                  text: "Less than 20000",
                  value: 20000,
                },
              ],
              loadingText: "Loading Cost...",
              optionType: "radio",
              searchPlaceholder: "Cost...",
              searchResultText: "Showing [VISIBLE] of [TOTAL]",
            },
          ]}
          filtersTitle="Filters"
          hasShowMore
          onChangeCallback={()=>{}}
          resultTextTemplate="Showing Results ([TOTAL_RESULTS]):"
          resultsDateFormat="yyyy-MM-dd"
          searchersConfig={[
            {
              id: "inputForDeviceName",
              name: "Device Name",
              placeholder: "Filter by Device Name...",
            },
            {
              canHide: true,
              id: "inputForDate",
              name: "Date",
              placeholder: "Filter by Date",
              showFieldText: "Show Date Input",
            },
          ]}
          showLessText="Show less"
          showMoreText="Show More"
          totalResults={8}
        />
      </Container>
    );
};

export default FilterBarComp;
