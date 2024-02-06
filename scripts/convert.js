function convertToStandardName(name)
{
    name = name.toLocaleLowerCase("vi")
    let newName = ""
    
    const ACharacters = ['á' , 'ã' , 'à' , 'ả' , 'ạ' , 'â' , 'ấ', 'ầ' , 'ẫ' , 'ẩ' , 'ậ' , 'ă' , 'ắ' , 'ẵ' , 'ằ' , 'ặ' , 'ẳ']
    const ECharacters = ['é' , 'ẽ' , 'è' , 'ẻ' , 'ẹ' , 'ê' , 'ế' , 'ề' , 'ễ' , 'ể' , 'ệ' ]
    const ICharacters = ['í' , 'ĩ' , 'ì' , 'ỉ' , 'ị'  ]
    const OCharacters = ['ó' , 'õ' , 'ò' , 'ỏ' , 'ọ' , 'ô' , 'ố' , 'ồ' , 'ỗ' , 'ổ' , 'ơ' , 'ợ' , 'ờ' , 'ỡ' , 'ớ' , 'ở']
    const UCharacters = ['ú' , 'ũ' , 'ù' , 'ủ' , 'ụ' , 'ư' , 'ứ' , 'ử' , 'ừ', 'ự' , 'ữ' ]
    const YCharacters = ['ý' , 'ỳ' , 'ỹ' , 'ỵ' , 'ỷ']


    for( let character of name )
    {
        if( character == 'đ' )
        {
            newName += 'd'
        }

        else if( ACharacters.includes(character) )
        {
            newName += 'a'
        }

        else if( ECharacters.includes(character) )
        {
            newName += 'e'
        }

        else if( ICharacters.includes(character) )
        {
            newName += 'i'
        
        }

        else if( OCharacters.includes(character) )
        {
            newName += 'o'
        }

        else if( UCharacters.includes(character) )
        {
            newName += 'u'
        }
        
        else if( YCharacters.includes(character) )
        {
            newName += 'y'
        }
        
        else
        {
            newName += character
        }

    }
    return newName
}

// let testString = ' Tiếng Việt, được viết thành chữ, nhờ những ký hiệu (hình vẽ hay chữ viết). Xưa, chữ Việt cổ, có thể mang hình dạng con nòng nọc (chữ khoa đẩu – nay đã thất truyền?).Thời kỳ Bắc thuộc (từ -111 đến +938), không kể các thời kỳ giành lại được nền đôc lập trong thời gian ngắn, dân ta dùng chữ Hán, còn gọi là chữ Nho. Một số chữ Hán phải “biến dạng” để viết tên địa danh, tên người hay tiếng địa phương của người Việt (thời đó gọi là người Giao Chỉ, hay người An-Nam) mà chữ Hán không có. Đây có thể là nguồn gốc chữ Nôm. Sau, nhờ tinh thần độc lập dân tộc, người Việt đã sử dụng và phát triển chữ Nôm thành chữ Việt, hoàn c

const userNameAfterConvert = convertToStandardName(sessionStorage.getItem('userName') );
sessionStorage.setItem('userName' , userNameAfterConvert);
console.log(userNameAfterConvert);