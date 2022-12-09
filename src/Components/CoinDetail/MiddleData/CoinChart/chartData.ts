import { AxisModel, BorderModel, ChartAreaModel, CrosshairSettingsModel, MarkerSettingsModel, ITooltipRenderEventArgs, ZoomSettingsModel } from "@syncfusion/ej2-react-charts";
import { TooltipModel } from "@syncfusion/ej2-svg-base";
import { Internationalization } from '@syncfusion/ej2-base';

// sass variables
import styles from "../../../../styles/sass/_variables.module.scss"

// chart options
export const primaryxAxis = (darkMode: boolean) => {
    const axisModel: AxisModel = {
        valueType: "DateTime",
        majorGridLines: {
            width: 0,
        },
        lineStyle: {
            color: "transparent"
        },
        crosshairTooltip: { enable: true },
        labelStyle: {
            color: darkMode ? styles.color_light_neutral_1 : styles.color_neutral_1,
            fontWeight: "600"
        },
        intervalType: "Auto"
    };
    return axisModel;
}

export const primaryyAxis = (darkMode: boolean, minPrice: number, maxPrice: number) => {
    const axisModel: AxisModel = {
        labelFormat: "${value}",
        labelPosition: "Inside",
        majorGridLines: {
            color: darkMode ? styles.border_color_dark : styles.border_color
        },
        majorTickLines: {
            width: 0
        },
        lineStyle: {
            color: "transparent"
        },
        minimum: minPrice * 99.7 / 100,
        maximum: maxPrice * 100.3 / 100,
        maximumLabels: 1,
        crosshairTooltip: { enable: true },
        labelStyle: {
            color: darkMode ? styles.color_light_neutral_1 : styles.color_neutral_1,
            fontWeight: "600"
        }
    };

    return axisModel;
}

export const tooltip: TooltipModel = {
    enable: true,
    textStyle: {
        fontWeight: "600"
    },
    shared: false,
}

export const chartArea: ChartAreaModel = {
    border: {
        width: 0,
    },
}

export const tooltipRender = (args: ITooltipRenderEventArgs) => {
    let intl: Internationalization = new Internationalization();
    let formattedHours: string = intl.formatDate(new Date(args.point.x as string | number | Date), { skeleton: 'hms' });
    let formattedMonth: string = intl.formatDate(new Date(args.point.x as string | number | Date), { skeleton: 'yMd' });

    let price: string = intl.formatNumber((args.point.y as number));

    args.text = `Price: $${price}`;
    args.headerText = formattedMonth + " " + formattedHours;
};

export const zoomSetting: ZoomSettingsModel = {
    enableMouseWheelZooming: true,
    enablePan: true,
    enableScrollbar: true
}

export const crosshair = (darkMode: boolean) => {
    const crossHair: CrosshairSettingsModel = {
        enable: true,
        lineType: 'Both',
        line: {
            color: darkMode ? styles.color_neutral_7 : styles.color_light_neutral_4
        }
    }

    return crossHair;
}

// series options
export const marker: MarkerSettingsModel = {
    visible: true,
    isFilled: true,
    width: 3,
    height: 3,
    shape: "Circle",
    border: { width: 0 }
}

export const border: BorderModel = {
    color: styles.color_primary,
    width: 2,
}