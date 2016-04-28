exports.create = function () {

    var page = new tabris.Page({
        topLevel: false,
        title: "My Devices"
    }).on('backButtonPressed', function () {
        require("./menu.js").create('menu.js').open();
    });

    new tabris.ImageView({
        id: "#zdev",
        image: {src: "images/zdev.png"},
        layoutData: {centerX: 0, top: 0},
        elevation: 999
    }).appendTo(page);

    new tabris.Button({
        id: "scan",
        text: "Scan",
        background: "white",
        border: "1,126px solid #565656",
        elevation: 9999
    }).on("select", function () {
        camera.open();
        page.close();
    }).appendTo(page);

    new tabris.TextInput({
        id: "search",
        text: "Search",
        alignment: "left",
        width: 120,
        elevation: 9999
    }).appendTo(page);

    var scrollView = new tabris.ScrollView({
        left: 0, right: 0, top: 0, bottom: 0
    }).appendTo(page);

//device 1 begins
    new tabris.ImageView({
        id: "dev1",
        image: {src: "images/device.png"}
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "dev1info",
        alignment: "left",
        text: "Device type\nXYZ - Identifier"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "status",
        alignment: "left",
        text: "Status"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "warnings",
        alignment: "left",
        text: "Device warnings"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "messages",
        alignment: "left",
        text: "Messages"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "details",
        aligment: "left",
        text: "Details...",
        highlightOnTouch: true
    }).on("tap", function () {
        require("./details.js").create('details.js').open();
    }).appendTo(scrollView);

    new tabris.ImageView({
        id: "line",
        image: {src: "images/joon.png"}
    }).appendTo(scrollView);
//device 1 ends

//"Filter by" button
    new tabris.Button({
        id: "filter",
        text: "Filter by...",
        background: "white",
        border: "1,126px solid #565656"
    }).on("select", function () {
        //camera.open();
    }).appendTo(scrollView);

//device 2 begins
    new tabris.ImageView({
        id: "dev2",
        image: {src: "images/device.png"}
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "dev2info",
        alignment: "left",
        text: "Device type\nXYZ - Identifier"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "status2",
        alignment: "left",
        text: "Status"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "warnings2",
        alignment: "left",
        text: "Device warnings"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "messages2",
        alignment: "left",
        text: "Messages"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "details2",
        aligment: "left",
        text: "Details...",
        highlightOnTouch: true
    }).on("tap", function () {
        require("./details.js").create('details.js').open();
    }).appendTo(scrollView);

    new tabris.ImageView({
        id: "line2",
        image: {src: "images/joon.png"}
    }).appendTo(scrollView);
//device 2 ends

//device 3 begins
    new tabris.ImageView({
        id: "dev3",
        image: {src: "images/device.png"}
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "dev3info",
        alignment: "left",
        text: "Device type\nXYZ - Identifier"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "status3",
        alignment: "left",
        text: "Status"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "warnings3",
        alignment: "left",
        text: "Device warnings"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "messages3",
        alignment: "left",
        text: "Messages"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "details3",
        aligment: "left",
        text: "Details...",
        highlightOnTouch: true
    }).on("tap", function () {
        require("./details.js").create('details.js').open();
    }).appendTo(scrollView);

    new tabris.ImageView({
        id: "line3",
        image: {src: "images/joon.png"}
    }).appendTo(scrollView);
//device 3 ends

//device 4 begins
    new tabris.ImageView({
        id: "dev4",
        image: {src: "images/device.png"}
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "dev4info",
        alignment: "left",
        text: "Device type\nXYZ - Identifier"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "status4",
        alignment: "left",
        text: "Status"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "warnings4",
        alignment: "left",
        text: "Device warnings"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "messages4",
        alignment: "left",
        text: "Messages"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "details4",
        aligment: "left",
        text: "Details...",
        highlightOnTouch: true
    }).on("tap", function () {
        require("./details.js").create('details.js').open();
    }).appendTo(scrollView);

    new tabris.ImageView({
        id: "line4",
        image: {src: "images/joon.png"}
    }).appendTo(scrollView);
//device 4 ends

    //support tray
    var trayHeight;
    var trayState = "down";
    var dragOffset;

    var tray = new tabris.Composite({
        layoutData: {left: 5, right: 5, top: 0, bottom: 0},
        cornerRadius: 12,
        elevation: 100000,
        opacity: 0.95
    }).appendTo(page);

    var strap = new tabris.Composite({
        layoutData: {right: 16, bottom: 5, height: 66, width: 66},
        background: "#e7e7e7",
        cornerRadius: 2,
        elevation: 100000
    }).appendTo(page);

    var strapIcon = new tabris.ImageView({
        layoutData: {centerX: 0, top: 17, height: 34, width: 34},
        image: {src: "images/support_icon.png"},
        elevation: 100000
    }).appendTo(strap);

    var trayContent = new tabris.Composite({
        layoutData: {left: 0, right: 0, top: 0, bottom: 0},
        background: "#cccccc",
        cornerRadius: 2
    }).appendTo(tray);

    var scrollView2 = new tabris.ScrollView({
        left: 5, right: 5, top: 0, bottom: 0
    }).appendTo(trayContent);

    new tabris.TextView({
        id: "suptr",
        layoutData: {centerX: 0, top: 5},
        text: "Get Support",
        font: "bold 20px"
    }).appendTo(scrollView2);

//Pete o'Donnell
    new tabris.ImageView({
        id: "pete",
        layoutData: {left: 24, top: "#suptr 10"},
        height: 117,
        width: 94,
        image: {src: "images/pete.png"}
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "pinfo",
        text: "Pete o'Donnell",
        layoutData: {left: "#pete 5", top: "#suptr 20"},
        font: "bold 18px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "ppos",
        text: "Chief Support Engineer\nDevice Family XYZ",
        layoutData: {left: "#pete 5", top: "#pinfo 2"},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "pstat",
        text: "Status (Available/In Chat)",
        layoutData: {left: "#pete 5", top: "#ppos 2"},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "icons1",
        image: {src: "images/icons.png"},
        layoutData: {left: 0, right: 0, top: "#pstat 25"},
        height: 72
    }).appendTo(scrollView2);

//Robert Salino

    new tabris.ImageView({
        id: "robert",
        layoutData: {left: 24, top: "#icons1 5"},
        image: {src: "images/techsupport.png"},
        height: 117,
        width: 94
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "rinfo",
        text: "Robert Salino",
        layoutData: {left: "#robert 5", top: "#icons1 15"},
        font: "bold 18px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "rpos",
        text: "Support Technician\nDevice Family XYZ",
        layoutData: {left: "#robert 5", top: "#rinfo 2"},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "rstat",
        text: "Status (Available/In Chat)",
        layoutData: {left: "#robert 5", top: "#rpos 2"},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "icons2",
        image: {src: "images/icons.png"},
        layoutData: {left: 0, right: 0, top: "#rstat 25"},
        height: 72
    }).appendTo(scrollView2);

//Virgina Robertson

    new tabris.ImageView({
        id: "virgina",
        layoutData: {left: 24, top: "#icons2 5"},
        image: {src: "images/virgina.png"},
        height: 117,
        width: 94
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "vinfo",
        text: "Virgina Robertson",
        layoutData: {left: "#virgina 5", top: "#icons2 15"},
        font: "bold 18px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "vpos",
        text: "Key Account\nManager",
        layoutData: {left: "#virgina 5", top: "#vinfo 2"},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "vstat",
        text: "Status (Available/In Chat)",
        layoutData: {left: "#virgina 5", top: "#vpos 2"},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "icons3",
        image: {src: "images/icons.png"},
        layoutData: {left: 0, right: 0, top: "#vstat 25"},
        height: 72
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "placeholder",
        layoutData: {left: 0, right: 0, top: "#icons3 15"},
        bottom: 16
    }).appendTo(scrollView2);

    trayContent.on("resize", function () {
        var bounds = trayContent.get("bounds");
        trayHeight = bounds.height;
        if (trayState === "dragging") {
            positionTrayInRestingState(2000);
        } else {
            tray.set("transform", {translationY: trayHeight});
        }
    });

    strap.on("pan:vertical", function (widget, event) {
        if (event.state === "start" && (trayState === "up" || trayState === "down")) {
            trayState = "dragging";
            dragOffset = tray.get("transform").translationY - event.translation.y;
        }
        if (trayState === "dragging") {
            var offsetY = Math.min(Math.max(event.translation.y + dragOffset, 0), trayHeight);
            tray.set("transform", {translationY: offsetY});
            strapIcon.set("transform", getStrapIconTransform(offsetY));
        }
        if (event.state === "end" && trayState === "dragging") {
            positionTrayInRestingState(event.velocity.y);
        }
    });

    strap.on("tap", function () {
        if (trayState === "up" || trayState === "down") {
            positionTrayInRestingState(trayState === "down" ? -1000 : 1000);
        }
    });


    function positionTrayInRestingState(velocity) {
        trayState = "animating";
        var translationY = velocity > 0 ? trayHeight : 0;
        var options = {
            duration: Math.min(Math.abs(trayHeight / velocity * 1000), 800),
            easing: Math.abs(velocity) >= 1000 ? "ease-out" : "ease-in-out"
        };
        strapIcon.animate({transform: getStrapIconTransform(translationY)}, options);
        tray.once("animationend", function () {
            trayState = velocity > 0 ? "down" : "up";
        }).animate({
            transform: {translationY: translationY}
        }, options);
    }


    function getStrapIconTransform(translationY) {
        var traveled = translationY / trayHeight;
        return {rotation: traveled * Math.PI - Math.PI};
    }


    page.apply({

        "#search": {layoutData: {top: 14, left: 160, right: 80}, font: "13px", opacity: 0.3, border: "0px"},
        "#scan": {layoutData: {left: "#search 10", right: 10, top: 12, height: 38}, font: "12px", opacity: 0.8},
        "#fordrawer": {layoutData: {left: -25, top: 100}, height: 253, width: 84},

        //device 1
        "#dev1": {layoutData: {left: 10, top: "#zdev 80"}, width: 141, height: 124},
        "#dev1info": {layoutData: {left: "#dev1 5", top: "#zdev 75"}, font: "bold 18px"},
        "#status": {layoutData: {left: "#dev1 5", top: "#dev1info 2"}, font: "14px"},
        "#warnings": {layoutData: {left: "#dev1 5", top: "#status 2"}, font: "14px"},
        "#messages": {layoutData: {left: "#dev1 5", top: "#warnings 2"}, font: "14px"},
        "#details": {layoutData: {left: "#dev1 5", top: "#messages 2"}, font: "14px", textColor: "blue"},
        "#line": {layoutData: {left: 0, right: 0, top: "#details 6"}, opacity: 0.3},

        //"Filter by..."
        "#filter": {
            layoutData: {left: "#dev1info 5", top: "zdev 80", height: 40, right: 5},
            font: "12px",
            opacity: 0.8
        },

        //device 2
        "#dev2": {layoutData: {left: 10, top: "#line 5"}, width: 141, height: 124},
        "#dev2info": {layoutData: {left: "#dev2 5", top: "#line 5"}, font: "bold 18px"},
        "#status2": {layoutData: {left: "#dev2 5", top: "#dev2info 2"}, font: "14px"},
        "#warnings2": {layoutData: {left: "#dev2 5", top: "#status2 2"}, font: "14px"},
        "#messages2": {layoutData: {left: "#dev2 5", top: "#warnings2 2"}, font: "14px"},
        "#details2": {layoutData: {left: "#dev2 5", top: "#messages2 2"}, font: "14px", textColor: "blue"},
        "#line2": {layoutData: {left: 0, right: 0, top: "#details2 6"}, opacity: 0.3},

        //device 3
        "#dev3": {layoutData: {left: 10, top: "#line2 5"}, width: 141, height: 124},
        "#dev3info": {layoutData: {left: "#dev3 5", top: "#line2 5"}, font: "bold 18px"},
        "#status3": {layoutData: {left: "#dev3 5", top: "#dev3info 2"}, font: "14px"},
        "#warnings3": {layoutData: {left: "#dev3 5", top: "#status3 2"}, font: "14px"},
        "#messages3": {layoutData: {left: "#dev3 5", top: "#warnings3 2"}, font: "14px"},
        "#details3": {layoutData: {left: "#dev3 5", top: "#messages3 2"}, font: "14px", textColor: "blue"},
        "#line3": {layoutData: {left: 0, right: 0, top: "#details3 6"}, opacity: 0.3},

        //device 4
        "#dev4": {layoutData: {left: 10, top: "#line3 5"}, width: 141, height: 124},
        "#dev4info": {layoutData: {left: "#dev3 5", top: "#line3 5"}, font: "bold 18px"},
        "#status4": {layoutData: {left: "#dev3 5", top: "#dev4info 2"}, font: "14px"},
        "#warnings4": {layoutData: {left: "#dev3 5", top: "#status4 2"}, font: "14px"},
        "#messages4": {layoutData: {left: "#dev3 5", top: "#warnings4 2"}, font: "14px"},
        "#details4": {layoutData: {left: "#dev3 5", top: "#messages4 2"}, font: "14px", textColor: "blue"},
        "#line4": {layoutData: {left: 0, right: 0, top: "#details4 6"}, opacity: 0.3}
    });

    return page;
};

