
function randomInRange(max , min)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const normalWishes =
[
    `Năm cũ qua đi, năm mới đã tới. Chúc bạn bầu trời sức khỏe, biển cả tình thương, đại dương tình bạn, sự nghiệp sáng ngời, gia đình thịnh vượng.` ,
    `Chúc năm mới đau đầu vì nhà giàu. Mệt mỏi vì học giỏi. Buồn phiền vì nhiều tiền. Ngang trái vì xinh gái. Mệt mỏi vì đẹp trai. Và mất ngủ vì không có đối thủ.`,
    `Chúc mừng năm mới! Khoẻ hơn Lý Đức. Mạnh hơn anh Trump. Giàu hơn Bill Gates. Quyến rũ hơn Don Juan. Bí mật hơn Bin Laden. May mắn hơn Xuân Tóc Đỏ.`,
    `Mừng 2024 phát tài phát lộc.

    Tiền vô xồng xộc, tiền ra từ từ.
    
    Sức khỏe có dư, công danh tấn tới.
    
    Tình duyên phơi phới, hạnh phúc thăng hoa.
    
    Xin chúc mọi nhà một năm đại thắng.`,
    `Có thể những niềm vui của năm mới kéo dài mãi mãi trong cuộc sống của bạn. Có thể bạn sẽ tìm thấy được ánh sáng dẫn bạn đến thành công, cái đích mà bạn mong muốn. Chúc mừng năm mới.`,
    `Hãy cùng vẫy tay tạm biệt năm cũ, đón nhận năm mới với nhiều ước mơ, hoài bão và cả hy vọng. Chúc bạn năm mới tràn ngập niềm vui và hạnh phúc.`,
    `Chúc mừng năm mới. Tâm trí thảnh thơi. Thỏa mái vui chơi. Đời luôn tươi mới.`,
    ` Năm mới với bao điều thú vị đang đến với bạn. Chúc bạn có đủ niềm đam mê để khám phá và tận hưởng từng ngày tươi đẹp của cuộc sống mới.`
];

const parentWishes =
[
    `Con chúc bố mẹ một năm mới tràn đầy sức khỏe , bình an , con cháu học giỏi và thành tài để làm bố mẹ hãnh diện , đồng thời hưởng đầy tình yêu thương của Thiên Chúa`,
    `Nhân dịp năm mới , con xin kính chúc các vị sinh thành của con một năm mới vui vẻ , tràn đầy sức khỏe , bình an để các người có thể tiếp tục sự nghiệp trồng người của mình và nhận đầy hồng ân của Chúa`,
    `Không có ai cho không cái gì ngoại trừ bố mẹ ta . Con thấy được tình yêu thương vô bờ bến mà bố mẹ dành cho con . Vì thế , nhân dịp năm mới , con xin kính chúc ba mẹ những điều tốt đẹp nhất trong cuộc sống , xin Chúa phù hộ gia đình ta và đồng hành cùng bố mẹ trong suốt cuộc đời này`
];

const sisterWishes = 
[
    `Năm mới , chúc Giang có nhiều sức khỏe , thành đạt trong học tập và cuộc sống , bớt nghiện tik tard lại và được Chúa phù hộ ,  thăng tiến trong sự nghiệp đánh đàn nhé!`,
    `Chúc con em ngáo một năm mới đấy sức khỏe , bình an , tiền vô như nước (cho tao mượn) và ngày càng xinh đẹp , học giỏi hơn`,
    `Thôi thì chỗ anh em , tao cũng không biết phải nói gì , chỉ biết chúc mày một năm mới bình an nhận đầy hồng ân của Chúa, thêm tuổi thêm khôn ngoan , nữ tính ,đẹp gái và biết vâng lời bố mẹ hơn!`,
    `Chúc Giang một năm mới thành đạt , vạn sự như ý , đánh piano cực cháy cho thằng anh mày bú ké fame`,
    `top 5 cau chuc , numero 1 : chuc may mot nam moi vui ve ( riel , no feke)`
];

const theBoyWishes =
[
    `Chỗ bạn bè , không văn vở . Xin kính chúc mày một cái tết an lành bên gia đình và người thân , nhận đầy hồng ân của Chúa, thêm tuổi thêm khôn ngoan và bớt báo mọi người lại :))`,
    `May nay xamluz qua , anyway , xin chuc chu may mot cai tet vui ve , an lanh , ben gia dinh va nguoi than`,
    `Năm mới vui vẻ nhá , thằng nào ít tiền lì xì hơn thì bao kem :))`,
    `Năm mới vui vẻ , chúc H  Anh hết bel , Chúc Vương hết suy , Quân mãi chad , Nhân hết gay , Trường hết là cậu trai cửa sổ , Hoàng hết gãy , Nhật acquy và Tiến đừng trở thành ông Xiển :)))`,
    `Cha bit noi j , Thoi thi chuc may mot nam moi vui ve , hy vong grip ae chung ta van giu vung su doan ket ( quen dell gi !)`
];

const crushWishes =
[
    `Ây dà , một năm đã qua rồi , không biết năm vừa rồi bạn có theo đuổi anh nào không chứ mình nói thật , nằm vừa rồi , trong lòng mình chỉ có mỗi bạn thôi đó Nghi ạ . Hy vọng năm nay mình sẽ có được bạn , bạn cũng sẽ có được mình.`,
    `Chúc cho bạn Vũ Vũ Bảo Nghi một năm mới vui vẻ , đầy sức khỏe , gặp nhiều thành công trong cuộc sống , tự tin vào bản thân hơn . Bạn hãy cứ mạnh dạn lên , tự tin trải nghiệm mọi thứ mà bạn muốn , mình sẽ ở sau và mãi mãi ủng hộ bạn`,
    `Xin chào người đẹp Vũ Vũ Bảo Nghi , bạn đang đi đâu thế ? Bạn biết bạn đang ở trong tim của mình không hả ! Vì thế nên nhân dịp năm mới , mình chúc bạn mọi điều tốt lành trong cuộc sống , được tràn đầy hồng ân của Chúa và trên hết là có được mình bạn nhé !`,
    `Ngai qua Ngai qua , crush minh la ban Vu Vu Bao Nghi ( do chinh la cau). Xin cau hay don nhan loi chuc nam moi cua minh do chinh la chuc ban nam moi them xinh dep , them niem tin vao cuoc song , xin Chua va Me Maria cho ban som tim dc dinh huong cho tuong lai cua minh .`
];


const theBoy = 
[
    'bui vu minh vuong',
    'nguyen hoang quan',
    'bui thien nhan',
    'do minh nhat',
    'nguyen hoang anh',
    'vu viet tien',
    'do bach',
    'doan trong hieu',
    'nguyen xuan truong',
    'tran minh hoang'
];

let userName = sessionStorage.getItem('userName');

userName = userName.trim();

const crush = 'vu vu bao nghi sus';

const parents = ['ho thi ha' , 'do kim long'];

const sister = 'do thanh giang';

let wish = '';

function getWish()
{
    if( theBoy.includes(userName) )
    {
        wish = theBoyWishes[ randomInRange( theBoyWishes.length - 1 , 0) ];
        return;
    }

    if( parents.includes(userName) )
    {
        wish = parentWishes[ randomInRange( parentWishes.length - 1 , 0 ) ];
        return;
    }

    if( crush == userName )
    {
        console.log("I was here");
        wish = crushWishes[ randomInRange(crushWishes.length - 1 , 0) ];
        return;
    }

    if( sister == userName )
    {
        wish = sisterWishes[ randomInRange(sisterWishes.length - 1 , 0 ) ];
        return;
    }

    wish = normalWishes[ randomInRange( normalWishes.length - 1 , 0 ) ];
}


getWish();

const paragraph = document.getElementById("paragraph");
paragraph.innerHTML = wish;



