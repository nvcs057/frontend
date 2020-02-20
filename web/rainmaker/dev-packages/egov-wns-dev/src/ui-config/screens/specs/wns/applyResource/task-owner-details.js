import {
    getCommonGrayCard,
    getCommonSubHeader,
    getCommonContainer,
    getLabelWithValue,
    getCommonHeader,
    getLabel
} from "egov-ui-framework/ui-config/screens/specs/utils";

const getHeader = label => {
    return {
        uiFramework: "custom-molecules-local",
        moduleName: "egov-wns",
        componentPath: "DividerWithLabel",
        props: {
            className: "hr-generic-divider-label",
            labelProps: {},
            dividerProps: {},
            label
        },
        type: "array"
    };
};

export const propertyOwnerDetailsHeader = getHeader({
    labelKey: "WS_TASK_PROP_OWN_HEADER"
});

export const mobileNumber = getLabelWithValue(
    {
        labelKey: "WS_OWN_DETAIL_MOBILE_NO_LABEL"
    },
    { jsonPath: "WaterConnection[0].property.owners[0].mobileNumber" }
)

export const name = getLabelWithValue(
    {
        labelName: "Name",
        labelKey: "WS_OWN_DETAIL_OWN_NAME_LABEL"
    },
    {
        jsonPath: "WaterConnection[0].property.owners[0].name"
    }
)

export const email = getLabelWithValue(
    {
        labelKey: "WS_OWN_DETAIL_OWN_EMAIL_LABEL"
    },
    {
        jsonPath: "WaterConnection[0].property.owners[0].emailId"
    }
)

export const gender = getLabelWithValue(
    {
        labelKey: "WS_OWN_DETAIL_GENDER_LABEL"
    },
    {
        jsonPath: "WaterConnection[0].property.owners[0].gender",
        localePrefix: {
            moduleName: "COMMON",
            masterName: "GENDER"
        }
    }
)

export const dateOfBirth = getLabelWithValue(
    {
        labelKey: "WS_OWN_DETAIL_DOB_LABEL"
    },
    { jsonPath: "WaterConnection[0].property.owners[0].dob" }
)

export const fatherName = getLabelWithValue(
    {
        labelKey: "WS_OWN_DETAIL_FATHER_OR_HUSBAND_NAME"
    },
    { jsonPath: "WaterConnection[0].property.owners[0].fatherOrHusbandName" }
)

export const relationship = getLabelWithValue(
    {
        labelKey: "WS_OWN_DETAIL_RELATION_LABEL"
    },
    { jsonPath: "WaterConnection[0].property.owners[0].relationship" }
)

export const correspondenceAddress = getLabelWithValue(
    {
        labelKey: "WS_OWN_DETAIL_CROSADD"
    },
    { jsonPath: "WaterConnection[0].property.owners[0].correspondenceAddress" }
)

export const specialApplicantCategory = getLabelWithValue(
    {
        labelKey: "WS_OWN_DETAIL_SPECIAL_APPLICANT_LABEL"
    },
    {
        jsonPath:
            "WaterConnection[0].property.owners."
    }
)

export const propertyOwnerDetails = () => {
    return getCommonGrayCard({
        headerDiv: {
            uiFramework: "custom-atoms",
            componentPath: "Container",
            props: {
                className: "common-div-css search-preview"
            },
            // header: {
            //     gridDefination: {
            //         xs: 12,
            //         sm: 10
            //     },
            // div3: propertyOwnerDetailsHeader,
            ...getHeader({
                labelKey: "WS_OWN_DETAIL_HEADER_INFO"
            })
            // },
        },

        multiOwner: {
            uiFramework: "custom-containers",
            componentPath: "MultiItem",
            props: {
                scheama: getCommonGrayCard({
                    viewFive: getCommonContainer({
                        mobileNumber,
                        name,
                        gender,
                        dateOfBirth,
                        email,
                        fatherName,
                        relationship,
                        correspondenceAddress,
                        specialApplicantCategory
                    }),
                }),
                items: [],
                hasAddItem: false,
                sourceJsonPath: "WaterConnection[0].property.owners",
                prefixSourceJsonPath: "children.cardContent.children.getpropertyOwnerDetailsContainer.children",
                afterPrefixJsonPath: "children.value.children.key"
            },
            type: "array"
        },
    });
}
