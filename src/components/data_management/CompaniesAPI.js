export const companiesApi = () => {
  const companies = [
    {
      names: ["yellow", "paz", "פז"],
      name: "חברת פז",
      category: "תחבורה",
      url: "https://www.paz.co.il/he-IL/home",
      logoUrl: "https://www.paz.co.il/assets/img/PAZ_LOGO_WEB.png",
    },
    {
      names: [`העברהבbitבנה"פ`, "העברהבbit"],
      name: "העברות בביט",
      category: "העברות ומשיכות באשראי",
      url: "https://www.bitpay.co.il/he",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/he/thumb/d/d6/Bit_logo.svg/1200px-Bit_logo.svg.png",
    },
    {
      names: ["כספומט"],
      name: "כספומט עמלתי",
      category: "העברות ומשיכות באשראי",
      url: "https://www.bitpay.co.il/he",
      logoUrl: "https://cdn-icons-png.flaticon.com/512/4234/4234007.png",
    },
    {
      names: ["netfixs.com", "4087-724-9160", "netflix"],
      name: "Netflix",
      category: "שירותי אינטרנט",
      url: "https://www.netflix.com/il/",
      logoUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAS1BMVEVHcEzVBhLkCBPbBxKwBQ6xBg/FBhCtBQ7oCBPiBxLkCBOlBA7iBxTkCBPxCBSXAw3kCBOUAw3lCBJtAAuDAQynBQ6xBg+xBRDjBxJ6RmETAAAAGXRSTlMA//+Xgf////9NuP9m0xr/gn7zcf/MtjhOS7LcjwAAAMtJREFUeAF10MESgzAIRVFUCVZqMTW2/f8v7RjYtMNjlcUZbgaKGcZrpus5cx/6nTL2wUCWDm4YeGOFgNlXYKD+iTsG/s0NAolvPhBg88ZOFQAtfcWTquRALBpVEYhzH5YDNvYGBNo6WM4mOZDmjdI0B2zqK5ohEA1FQJufe2iSA2lnNDQHbMezAzYIpmgAoPXRwWKSA6nkjaIQ7GMfywFXioZKDmaiLRoQ3L2BAXmDMVj9FALBzVdg4I2x/IPzNc3z+3p+9n1at4F8vruuDABTzZR7AAAAAElFTkSuQmCC",
    },
    {
      names: ["קאזהדוברזיל"],
      name: " קאזה דו ברזיל",
      category: "מסעדות ואוכל בחוץ",
      url: "https://www.netflix.com/il/",
      logoUrl:
        "https://casadobrasil.co.il/wp-content/uploads/2020/02/logo-png.png",
    },
    {
      names: [`ביתןמרקט`],
      name: `ינות  ביתן`,
      category: "סופרים ומכולות",
      url: "https://www.ybitan.co.il/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/he/thumb/a/aa/Bitan_Market_Logo.png/640px-Bitan_Market_Logo.png",
    },
    {
      names: [`א.ב.אליאבבע"מ`],
      name: `א.ב אליאב `,
      category: "חומרי בניין וציוד יצירה",
      url: "https://www.facebook.com/abeliav11/?locale=he_IL",
      logoUrl: "https://cdn-icons-png.flaticon.com/512/4935/4935205.png",
    },
    {
      names: [`לבהתחביב`],
      name: `לב התחביב`,
      category: "קניות",
      url: "https://www.facebook.com/abeliav11/?locale=he_IL",
      logoUrl: "https://cdn-icons-png.flaticon.com/512/4935/4935205.png",
    },
    {
      names: ["woltuusimaafi"],
      name: "Wolt",
      category: "מסעדות ואוכל בחוץ",
      url: "https://wolt.com/en/discovery",
      logoUrl: "https://1000logos.net/wp-content/uploads/2022/09/Wolt-Logo.png",
    },
    {
      names: ["תןביס"],
      name: "תן ביס",
      category: "מסעדות ואוכל בחוץ",
      url: "https://www.10bis.co.il",
      logoUrl:
        "https://companieslogo.com/img/orig/TKWY.AS-88c0f96c.png?t=1659645684",
    },
    {
      names: [`.ע.צ.ה `, `ע.צ.ה.תעשיותומסחר(1998)בע"מ`, "תעשיות ומסחר )8991"],
      name: "עץ ועצה",
      category: "קניות",
      url: "https://www.eza.co.il/",
      logoUrl: "https://cdn-icons-png.flaticon.com/512/4935/4935205.png",
    },
    {
      names: ["רונבי"],
      name: "רונבי",
      category: "קניות",
      url: "https://www.ronbi.co.il/",
      logoUrl:
        "https://d3m9l0v76dty0.cloudfront.net/system/logos/395/original/ad831629cfdff4cdf888d10c588d0546.png",
    },
    {
      names: ["paypal*microsoftstor35314369001gb", "microsoftst"],
      name: "Microsoftst",
      category: "שירותי אינטרנט",
      url: "https://www.microsoft.com/en-il/",
      logoUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEXz8/PzUyWBvAYFpvD/ugjz9fb19Pbz+fr39fr69vPy9foAofD/tgDzRQB9ugAAo/Df6dCv0Xjz2dPzTBfzl4PznImz04CAx/H60oHS5vJ5xPH60Hn16dIAnvDz7u3z4t7n7dzzNADzkXurz3BwtQDzvrLM36zf6/Os2PL336z07d/7z3RN8WfWAAABg0lEQVR4nO3cyVLCYBCFURwCkXlygDBFUBTf//3cSGIVf5WrDi7O9wJdp3p/Wy1JkvSrLLzqVDu8FHAzjW57JrZ34+hSH5yWg9jK187PrXx/GMZ2GF9+MZsObmKbzSvhZHgb25CQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCwUWE5i21QC/fB86Xp/dLt/DG4t/MGbf7+FNxkl9jZzTrR1TvCeXjJIWFJkv7uIbzqVDe8LAE8Lp+D+zgTu5/FS2zFKUFcrEex9ZaV8Ksf3Sol7N3FNqqFRf8+NkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQsJmhetebOtr75dmi+iO1anTKrrNJbDRsvCuDJQk6Z/1DSzvYqEfRCNJAAAAAElFTkSuQmCC",
    },

    {
      names: ["godaddy", "godaddy.com"],
      name: "GoDaddy",
      category: "שירותי אינטרנט",
      url: "https://www.godaddy.com/en-il",
      logoUrl:
        "https://logodownload.org/wp-content/uploads/2017/10/godaddy-logo-5-1.png",
    },
    {
      names: ["google"],
      name: "Google",
      category: "שירותי אינטרנט",
      url: "https://www.google.com/",
      logoUrl:
        "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227",
    },
    {
      names: ["גבעתיים"],
      name: "עירית גבעתיים",
      category: "חשבונות משק הבית",
      url: "https://city4u.co.il/PortalServicesSite/_portal/263000",
      logoUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABO1BMVEVHcExPXHeosL1kboXP1t+vtsLj4+fn7PFqdowVK1IbLVP6/f9mcohcaYLX3eVxfJFGVnQrPmF7hZgyRGWNlqZodIukq7hNXXlLWnb3+fuutcJOW3d/i6AAADB2gZacpLORmqmlrryut8VZaIKCmLJSYX2Zn60yQ2RlcId2gph+h5lSY39XZoEDFEMjOF0sQmW9xM7W3OQAADV5iaEPGTcmQGUvQWQRJkaTm6qLk6OirLyMl6gcM1qMlqZYY3uFjqClrbs1RWaUna4FJE+ss8DK0tsrPWAuQGKDkKQAADvn7fKIk6Q+Smc/TmuSna6iqrl/iZvIztfg5uw5Smo3SGhDUnAwQWMpPF9lcokgNVpWZX88TGtcaoN9h5sKJE6Gj6FPXHZSYHtIWngBGEZueY91f5NJVnGUna0AADv2E+qWAAAAVHRSTlMAuv3HNVoED+L97xjs5Ui0pvntXa2Sb5PmNH3Oi6rTkZ9NjaUR8q64rHxhQ3PJ85SOmXY4Gnf0NMy7OR/F+9nR3uTor8pi5qFPk1d90fTim7rOad0sVz6DAAACeUlEQVQ4jXWT1XJiQRRF+wLX8MFtgECQ4ATi7p6MtF0XLP//BZNJKqEzsp+6zl51atWpagA+ZeUkJIL/5+lBTa1p0srfjTjaakXu0Unp5Z1NI+c+2kzUwwwgUemmXxGBL+fLiVlhlU+m+/vSsg9gHwCjKGdYwQgKzKlV3QVAsPkPIJEXO0WdRpEeJEpOCnrrkKZAMvgBOHvRjB6uDkbZ130+sHtgGU1A3m0v5GtBjbyoDsXE20QQmrqwM/e9b0ghnwj4xKMnttgW3odZ/NEDkEmCtsfSbRUaPM+/nSq+VABgbb9ypPY6ozs8DWJs5IVAvL29zgBCNxt7VbqWZc1rTbwIxrgOA/i6G4pLC+F4BmvEfZYxRhK3xgC5s9MTr4b8l0TXIYpBV6dSZIN1aEiabigroKgQjPKhYlGr1VmHjUiIhjR7tqdAiHUKTSKrBS8DrO+cHoUgaayqcwTNxbM8IbBQY4DZVm06xfKZqCGVLKBD87r2vccAtZahQs28AvuIqNBF7pTQqspccrOEFTKRQmWPopYUB7ozdfIY21oCcoXODHRnYqJMtjNub/PhcI/e1JeAv2IjDR5PFKQjpcDlyslOuNHnGGAASQ9jj2G6qjzgzg+k6o9musEAQ3jQKqNkHDtUKchffycd/cY4tDPjaPpqV7SnKvIijdLZ1DdvL4H8YeV2OOS6XeyhnoltGJZ13oLMHVIm75iKiR3naGdi2jNraon+BAOAQ39Ymi4MOPBGyqWfuuUJB+0AC4hfLm+PizQQ1z3HCwNFsjFlFXxK2CbxCx5k0nMQfeJTm9of/UvKmhxK8uPxOFfVSOJffzyQ6s/mBGOHKzH1LwkKhFN5v6c7AAAAAElFTkSuQmCC",
    },
    {
      names: ["המוסדלביטוחלאומי"],
      name: "ביטוח לאומי",
      category: "מיסים",
      url: "https://www.btl.gov.il/Pages/default.aspx",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/he/thumb/6/67/BTL-Logo_Old.svg/1024px-BTL-Logo_Old.svg.png",
    },
    {
      names: ["יספלאנט"],
      name: "יס פלאנט",
      category: "קניות",
      url: "https://www.planetcinema.co.il/#/",
      logoUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAAAAAAEjEgMuGAIUCgEAChIeDwBaMAOZUQO4YQPUcALneQL0gQL3ggLvfgLedAKPTAM1HAIIBAAFAwEAAAyDRAH6hAL9hQL4gwJ9QgPDZwNpOAOWTwPJagNGJQLgdwM+IQNTKwKpWQNxPANEJAJf2HrQAAAA0ElEQVR4AdWQ0Q6CMAxFewEFtgmI2k5UUfH/v9HQZIku41XjfVmTnpyll74bAFme5wWQWK7WZVUb65zbNG3dbUHU796B/cGyCPs5LN4cY4A63mhYX5aqpw8Ande9G4wSvjkhMijALXB2Ol2iCwIAuo48T80aaQNt9RPvbkuGPABLhrudR7bFggG1TjJEVYYzzShK2jLZQyhK5LCjuIcAsLAbTlp1ymDH1jymDBEQDH7MeoA0CqR6CIkNMfCnBq3QgNJBJY2pq+m6BNCzLAD6SV7Taxb43P4bsgAAAABJRU5ErkJggg==",
    },
    {
      names: ["מוזיאון"],
      name: "מוזיאונים בישראל",
      category: "קניות",
      url: "https://museums.gov.il/he/Pages/default.aspx",
      logoUrl:
        "https://museums.gov.il/SiteCollectionImages/Site-Logos/logo.png",
    },
    {
      names: ["כללביטוח"],
      name: "כלל ביטוח",
      category: "תחבורה",
      url: "https://www.clalbit.co.il/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D7%9C%D7%95%D7%92%D7%95_%D7%9B%D7%9C%D7%9C_%D7%91%D7%99%D7%98%D7%95%D7%97.svg/2560px-%D7%9C%D7%95%D7%92%D7%95_%D7%9B%D7%9C%D7%9C_%D7%91%D7%99%D7%98%D7%95%D7%97.svg.png",
    },
    {
      names: ["יוחננוף"],
      name: "יוחננוף",
      category: "סופרים ומכולות",
      url: "https://yochananof.co.il/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/he/d/d0/%D7%9C%D7%95%D7%92%D7%95_%D7%99%D7%95%D7%97%D7%A0%D7%A0%D7%95%D7%A3.png",
    },
    {
      names: ["שופרסל"],
      name: "שופרסל",
      category: "סופרים ומכולות",
      url: "https://www.shufersal.co.il/online/he/G14",
      logoUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA4klEQVR4Ae3VIQiDUBSFYctLlrG0Zl7Pso49mO0d7MUOVtM6WO3Bbl2xmFZsL21H+IMYpuDEcg98wfDeuTc8DCwWi8VyerrLI5q5yVXcwZ0O4fTR4yWdtNJIJbkkDOe2XMwCd4k5m3FPIaU8paajmQ59VniGq7jUzQspSymoWWKQUfza/Qyw2ZuimyRs0288u38AeLYc9xSDAc7CADZAgeUzaaUXv6PAyyjD8pmjXnvPkSQM1/4YZqSgYYlcUs7eEXFnCDcJtobDmXSz7VrKYgrC4OiwTcmGKjwh//xXWCwWyxdUlUFRhHarcQAAAABJRU5ErkJggg==",
    },
    {
      names: ["סיטימרקט"],
      name: "סיטי מרקט",
      category: "סופרים ומכולות",
      url: "https://www.facebook.com/CiTyMarKEtRG/",
      logoUrl:
        "https://www.xn----9hcbbmdao1cc2i.co.il/wp-content/uploads/2021/03/City-Market.png",
    },
    {
      names: [`כפרגלעדימשיש.מיבוא`],
      name: "כפר גלעדי",
      category: "קניות",
      url: "https://kfargiladi.co.il/",
      logoUrl: "https://kfargiladi.co.il/460149_3446.png",
    },
    {
      names: ["mcdonalds", "mcdonald's", `מקונלד'ס`, "מקדונלד'ס", "מקדונלס"],
      name: "Mcdonald's",
      category: "מסעדות ואוכל בחוץ",
      url: "https://www.mcdonalds.co.il/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png",
    },
    {
      names: ["aroma", "ארומה"],
      name: "ארומה",
      category: "מסעדות ואוכל בחוץ",
      url: "https://www.aroma.co.il/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/he/thumb/c/c9/Aroma_Espresso_Bar_Logo.svg/1200px-Aroma_Espresso_Bar_Logo.svg.png",
    },
    {
      names: ["ויקטורי"],
      name: "ויקטורי",
      category: "סופרים ומכולות",
      url: "https://www.victoryonline.co.il/",
      logoUrl:
        "https://www.galmomc.com/wp-content/uploads/2020/04/%D7%95%D7%99%D7%A7%D7%98%D7%95%D7%A8%D7%99.png",
    },
    {
      names: ["alipay", "35314369001", "aliexpress"],
      name: "AliExpress",
      category: "קניות",
      url: "https://he.aliexpress.com",
      logoUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB7klEQVR4Ae2TA6weURCFb+24iFUFta2gChvXDao4f4w6alC7DWvbts2owTN/8+50vyQT9uHuM05yFndn5jsro5KDZqbvm95BE/b30hBmNgxYylV4yLelqJFsYSp8ZiPD1Ra28XgkLDSNb/IEwpzYnUYiqzpI8cxOUjC6k+SPql8zk9kwYMGEbTjIbDNSOMkvHN65UQwLJmxDGoU3pmHCNuEVHVloEsM2RdM7NVkA2CZ/RNMFgG2qL+jqPtRxRpUBErfOiC0vkZIlUwPD6bUVJf6s044BRnYVL5sRFDm4LXAAehGzmOn0BHKlRYLiF44FDkAvYpbzK0i9vCco+/dP4AD0ImY5BwhvDwnyPE9KV81xhtNDL2KWc4DCGQPExmOCMj8/Sv6YnrWGU0sPYgaznAPgyN6NokpcPyH5o7rXCKeGWhUz3H9D9egekn7/VFSpNw+laOHQKuu5Ro2KXmYEDoALpvWT9Nc3ouKXSt6/JJVb10vpmnmYY9a4Jip66GVG8ADq8X0kdmq/eLmc1CRqqKWH3noJoC5eNFLi545IrqxIv3DEMWtco0brXQM4eEQXKZo3SEqWTcMcs6bX3QM0pdsDNIsA4SYMECbAzSYMcJMAM33bJoBb2Ab5ByEWGhkegq3SJ3Gzgb+JMAxYyv0HNWkHo0fuknQAAAAASUVORK5CYII=",
    },
    {
      names: ["אמיריםהפצה"],
      name: "אמירים הפצה",
      category: "קניות",
      url: "https://www.adcs.co.il/",
      logoUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAkFBMVEX////5+fnz8/P9/f329vbw8PAdRYLt7e0fQ4GHlbAALXUhQX7p6emJk64ANXkAM3gAOXzh5ewALHUZPn3r7fIAJnIMPX61vtBRZ5ZUa5iGlLPAxtcAKnU9WI1fcpyRnrqrtsotS4bZ3ed+i61pfKLHzNubp8A5VIlIXpBzg6jl6vCkrsMpUIjc3uS4vs11iaprCb1fAAABhUlEQVQ4jX1S7YKCIBAEQdrAAF3FO63Uys7r697/7Y6+7qy0+SHLzrA7rBDyhJg+Zx5BTf5e8KE/3/KFUTJ+w5dzpWwxzqcOF0ohHxUskyo3ytRjfJ40LJ0r7EZ4hklJSIdgRmxW8nzDvQZbDTtM5iu/7DSAHRSs5eayHgBMOVTAZOfWNSCAWw4IptJn24VRCgBk+sJzlKt0KVEp7byJ7Yugll9b6fygdV4aAMGeBR2i9lNOvilhzYDN2Pf21Zv2vKnsq82tF6BcX1/TLhGgd4+CBSrUf2U/8HmaqUTT/V8t99M8PAhyafrPhBkQpu0L7mP+21uB9wzzII3cX4IbyMp4m+mVO394Jsu+gPk/Juz1DKGUslYmMaM9kL0V4kAuIeec1kaHvA+6c8LbpD4kQRDQQmMYPIBunHDf1EckDPkRUR552AevfQ8XB2FIJtGpQcSujaLJHVF03KAQ8HmMJmSWZcZabTJtq/BChwW4uXbOoTXih5zWsxuKkz/qMaln09n0hv0v8tAcW2zr0KYAAAAASUVORK5CYII=",
    },
    {
      names: ["פארין"],
      name: "מאפיית פארין",
      category: "מסעדות ואוכל בחוץ",
      url: "https://easy.co.il/page/21600388",
      logoUrl:
        "https://www.myziona.co.il/sites/yavne/UserContent/images/INDEX/Misadot_ochel/peerin/perin%20(1).JPG",
    },
    {
      names: ["oomai", "אומאיי"],
      name: "Oomai",
      category: "מסעדות ואוכל בחוץ",
      url: "http://www.oomai-tlv.co.il/our-food",
      logoUrl: "http://www.oomai-tlv.co.il/warehouse/dynamic/183265.svg",
    },
    {
      names: ["kfc"],
      name: "KFC",
      category: "מסעדות ואוכל בחוץ",
      url: "https://www.kfc.co.il/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/he/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
    },
    {
      names: ["משלוחה", "משלוחההזמנתאוכלאונליין"],
      name: "משלוחה",
      category: "מסעדות ואוכל בחוץ",
      url: "https://app.mishloha.co.il/mishloha-business/",
      logoUrl:
        "http://mishloha.digital/wp-content/uploads/sites/511/2022/05/site-icon-08.png",
    },
    {
      names: ["פוקס"],
      name: "Fox",
      category: "קניות",
      url: "http://www.oomai-tlv.co.il/our-food",
      logoUrl:
        "https://serviced.co.il/wp-content/uploads/2021/06/%D7%A4%D7%95%D7%A7%D7%A1-%D7%9C%D7%95%D7%92%D7%95.jpg",
    },
    {
      names: ["פעמית"],
      name: "פעמית סטור",
      category: "קניות",
      url: "https://www.peamitstore.co.il/",
      logoUrl:
        "https://www.peamitstore.co.il/sites/peamitstore/img/site_logo.png",
    },
    {
      names: ["סלופארקטכנולוגיותבעמ"],
      name: "Cello",
      category: "תחבורה",
      url: "https://cello-app.com/",
      logoUrl: "https://cello-app.com/wp-content/uploads/2022/10/Logo.svg",
    },
    {
      names: ["סונול"],
      name: "סונול",
      category: "תחבורה",
      url: "https://www.sonol.co.il/",
      logoUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAnFBMVEX////85+z//P374Obqb4XjME/nVG7zq7n+9vjiIEjeACLfACzeACneABzpXnjeACXfADHfADD4ydPnTmvpY3veACbuh5rnWnHpaX/wl6jfAC7hGD/+8vbgADX2u8fkM1X0sr3iITjxnq7tfU/wj1Psc0v1r13dABjwlKX4xmP612f50GXoVEPmS0HkOjztfk/2umD83mnteY/51NzQUb+5AAABSklEQVR4Aa2SBZbDMAxEw2DYWG3QZWa+/902MaScxf8gMKI3kvFjTNNqkm3HdT0/eJ8eIowJdd5GfESsBKj/Rm9RYBWk/SRZYrI4YQLsWg+jpXGWp37BQQbwTve+cg8RkiCElP4Y0A0JuwdY/zagT9kjnA2coakD/GsAALCReMFJEo4tNULdGybT0WyuvgAvljIgGGCmWK036xXUjcBWQyy4SppvNpv1luuI2tEl4kLfrTYVM9ABQ0Mx7kGp76W+OWi/enZthYvLgNFxXcrHkdJhkRqaZSL9GfWOpxmX6YSea93sce3DfjaS++p5N26eozurSkhmBzfLYJw9kKjy2oc7UVaQNt8vg2OiS2H39iwv4tIg6bW9Hnl5ETnigJP4EliXNlEe3QUEeYQ60lZzQHSLOy6tQL9hrk18g79IIuqV8W/px07fMv6PT33JKGlISzyJAAAAAElFTkSuQmCC",
    },
    {
      names: ["ליברהעסקותביטוח"],
      name: "ליברה ביטוח",
      category: "תחבורה",
      url: "https://www.lbr.co.il/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/he/thumb/b/ba/Libralogo.svg/2560px-Libralogo.svg.png",
    },
    {
      names: ["4158396885", "'wikipedia"],
      name: "Wikipedia",
      category: "שירותי אינטרנט",
      url: "https://cello-app.com/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png",
    },
    {
      names: ["שקוף-העיןהשביעית-המק"],
      name: "עיתון שקוף",
      category: "שירותי אינטרנט",
      url: "https://shakuf.co.il/",
      logoUrl:
        "https://shakuf.co.il/wp-content/uploads/2021/01/%D7%A9%D7%A7%D7%95%D7%A3-%D7%9C%D7%95%D7%92%D7%95-%D7%97%D7%9C%D7%A7%D7%99-2020.svg",
    },
    {
      names: ["lobby99"],
      name: "לובי 99",
      category: "שירותי אינטרנט",
      url: "https://lobby99.org.il/",
      logoUrl:
        "https://onlinecrust.weebly.com/uploads/1/2/2/1/122131945/lobby99logo_orig.png",
    },
    {
      names: ["4152336230", "'scribd"],
      name: "Scribd books",
      category: "שירותי אינטרנט",
      url: "https://www.scribd.com/",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyXWTg4nje7UTqOx27VjeghuRgaV-ltn5nszpvPU12olRSGTm1-Zk7Cd4i5Dqya-mgLM&usqp=CAU",
    },
    {
      names: ["מ.תחבורהרב-פס"],
      name: "רב-פס",
      category: "תחבורה",
      url: "https://ravpass.co.il/",
      logoUrl:
        "https://ravpass.co.il/wp-content/uploads/2020/07/Rav-Pass_ByHopOn_hb-1.svg",
    },
  ];
  return companies;
};
