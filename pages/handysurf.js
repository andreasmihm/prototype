/**
 * Created by ruibo on 29.04.2016.
 */
exports.create = function () {

    var page = new tabris.Page({
        topLevel: false,
        title: "Device Details"
    }).on('backButtonPressed', function () {
        require("./devices.js").create('devices.js').open();
    });

    //header
    new tabris.ImageView({
        id: "zdev",
        image: {src: "images/logo.png"},
        layoutData: {left: 8, top: 5, height: 65, width: 58},
        elevation: 1,
        opacity: 1.0
    }).appendTo(page);
//header end

    new tabris.ImageView({
        id: "devpic",
        image: {src: "images/handysurf.jpg"}
    }).appendTo(page);

    new tabris.TextView({
        id: "dinf",
        alignment: "left",
        text: "Handysurf\nPortable roughness measurement tool"
    }).appendTo(page);

    new tabris.TextView({
        id: "serial",
        alignment: "left",
        text: "Serial number:\nFXRL S35S"
    }).appendTo(page);

    new tabris.TextView({
        id: "updates",
        alignment: "right",
        text: "Available update(s)"
    }).appendTo(page);

    new tabris.TextView({
        id: "warnings",
        alignment: "right",
        text: "Device warnings"
    }).appendTo(page);

    new tabris.Button({
        id: "trouble",
        text: "Troubleshoot",
        background: "white"
    }).appendTo(page);

//tabs with "Messages", etc
    var tabFolder = new tabris.TabFolder({
        layoutData: {left: 15, top: "#trouble 10", right: 15, bottom: 10},
        paging: true // enables swiping. To still be able to open the developer console in iOS, swipe from the bottom right.
    }).appendTo(page);

    var msg = new tabris.Tab({
        title: "Messages" // converted to upper-case on Android
    }).appendTo(tabFolder);

    var scrollView2 = new tabris.ScrollView({
        left: 15, right: 15, top: 10, bottom: 0
    }).appendTo(msg);

    new tabris.TextView({
        id: "date",
        text: "Tuesday 19th Apr",
        layoutData: {top: 10, centerX: 0},
        font: "bold 16px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "divide",
        image: {src: "images/joon2.png"},
        layoutData: {top: "#date 10", left: 0, right: 0}
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "time",
        text: "12:54",
        layoutData: {top: "#divide 10", left: 25},
        font: "16px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "heading",
        text: "Device - Diagnostics",
        layoutData: {top: "#divide 5", centerX: 0},
        font: "bold 15px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "subject",
        text: "Warning message summary",
        layoutData: {top: "#heading 2", centerX: 0},
        font: "12px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "divide2",
        image: {src: "images/joon2.png"},
        opacity: 0.6,
        layoutData: {top: "#subject 2", left: 0, right: 0}
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "time2",
        text: "13:13",
        layoutData: {top: "#divide2 10", left: 25},
        font: "16px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "heading2",
        alignment: "center",
        text: "Peter Davis,\nZEISS Support Americas",
        layoutData: {top: "#divide2 5", centerX: 0},
        font: "bold 15px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "subject2",
        text: "Message Subject",
        layoutData: {top: "#heading2 2", centerX: 0},
        font: "12px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "divide3",
        image: {src: "images/joon2.png"},
        layoutData: {top: "#subject2 2", left: 0, right: 0},
        opacity: 0.6
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "date2",
        text: "Friday 15th Apr",
        layoutData: {top: "#divide3 5", centerX: 0},
        font: "16px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "divide4",
        image: {src: "images/joon2.png"},
        layoutData: {top: "#date2 5", left: 0, right: 0}
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "time3",
        text: "15:17",
        layoutData: {top: "#divide4 10", left: 25},
        font: "16px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "heading3",
        alignment: "center",
        text: "Peter Davis,\nZEISS Support Americas",
        layoutData: {top: "#divide4 5", centerX: 0},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "subject3",
        text: "Message Subject",
        layoutData: {top: "#heading3 2", centerX: 0},
        font: "12px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "divide5",
        image: {src: "images/joon2.png"},
        layoutData: {top: "#subject3 2", left: 0, right: 0},
        opacity: 0.6
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "time4",
        text: "21:27",
        layoutData: {top: "#divide5 10", left: 25},
        font: "16px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "heading4",
        alignment: "center",
        text: "Peter Davis,\nZEISS Support Americas",
        layoutData: {top: "#divide5 5", centerX: 0},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "subject4",
        text: "Message Subject",
        layoutData: {top: "#heading4 2", centerX: 0},
        font: "12px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "divide6",
        image: {src: "images/joon2.png"},
        layoutData: {top: "#subject4 2", left: 0, right: 0},
        opacity: 0.6
    }).appendTo(scrollView2);

    var maint = new tabris.Tab({
        title: "Maintenance"
    }).appendTo(tabFolder);

    new tabris.TextView({
        text: "Content of Tab Maintenance",
        centerX: 0, top: 50
    }).appendTo(maint);

    var stat = new tabris.Tab({
        title: "Statistics"
    }).appendTo(tabFolder);

    new tabris.TextView({
        text: "Content of Tab Statistics",
        centerX: 0, top: 50
    }).appendTo(stat);

    page.apply({
        "#devpic": {layoutData: {top: "#zdev 10", left: 5}, width: 161, height: 144},
        "#dinf": {layoutData: {top: "#zdev 10", left: "#devpic 5"}, font: "bold 20px"},
        "#serial": {layoutData: {top: "#dinf 2", left: "#devpic 5"}, font: "16px"},
        "#updates": {layoutData: {left: "#devpic 5", top: "#warnings 2"}, font: "16px"},
        "#warnings": {layoutData: {left: "#devpic 5", top: "#serial 2"}, font: "16px"},
        "#trouble": {layoutData: {top: "#updates 10", left: "#devpic 25"}, font: "15px", opacity: 0.8}
    });

    return page;
};