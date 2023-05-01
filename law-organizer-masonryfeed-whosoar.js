/***
 *      @author Victor Chimenti, MSCS
 *      @file law-organizer-masonryfeed.js
 *      @see Seattle University School of Law Students Who Soar Profile
 *          id: 6401
 *          law/organizer/masonryfeed/
 *
 *      This content type layout is a smart layout for profile items that must obey
 *      a masonry grid layout. In this iteration this layout will be dedicated
 *      to the student bio content type and is derived from the faculty bio.
 *
 *      This content layout will be the organizer layout and will link to the
 *      full text layout to reveal the full article.
 *
 *      Document will write once when the page loads
 *
 *      @version 6.1.0
 * 
 */




    try {

        /***
         *  Assign local variables from the content type's fields
         * 
         * */
        var contentName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
        var studentName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name of Student' output='normal' modifiers='striptags,htmlentities' />");
        var bioPhoto = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Biographical Photo' output='normal' formatter='path/*' />");
        var pullQuote = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Pull Quote' output='normal' modifiers='medialibrary,nav_sections' />");
        var lawGradYear = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Graduating Class' output='normal' modifiers='striptags,htmlentities' />");
        var underGradYear = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Undergraduate Grad Year' output='normal' />");
        var undergradSchool = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Undergraduate Institution' output='normal' modifiers='striptags,htmlentities' />");
        var currentWork = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Current Place of Work' output='normal' modifiers='striptags,htmlentities' />");
        var biography = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Biography' output='normal' modifiers='medialibrary,nav_sections' />");
        var fullTextLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='fulltext' use-element='true' filename-element='Name' modifiers='striptags,htmlentities' />");
        var contentID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");
    
        
        
    
        /***
         *  Declare/Assign local variables with base formatting
         * 
         * */
        var hiddenFields = '';
        var openHiddenFields = '<div class="hiddenSearchText visually-hidden">';
        var closeHiddenFields = '</div>';
        var primaryImageString = '<img src="' + bioPhoto + '" class="card-img-top rounded-circle" alt="' + studentName + '">';
        var cardTitle = '<h3 class="card-title text-center">' + studentName + '</h3>';
        var pullQuoteString = '<span class="card-text studentProfilePullQuote visually-hidden">No pull quote provided</span>';
        var openCardBody = '<div class="card-body">';
        var closeCardBody = '</div>';
        var openImageWrapper = '<div class="studentProfile standardContent">';
        var closeImageWrapper = '</div>';
        var openCard = '<div class="card h-100 border border-5 border-white">';
        var closeCard = '</div>';
        var beginningHTML = '<div class="studentProfileMasonry contentItem col flex-fill w20" aria-label="' + studentName + '" id="id' + contentID + '" data-position-default="Main" data-position-selected="Main">';
        var endingHTML = '</div>';
    
    
    
    
        /***
         *  determine if the article contains full text content
         * 
         * */
        if (biography != "") {
            primaryImageString = '<a href="' + fullTextLink + '" title="' + studentName + '"><img src="' + bioPhoto + '" class="card-img-top rounded-circle" alt="' + studentName + '"></a>';
            cardTitle = '<a href="' + fullTextLink + '" title="' + studentName + '"><h3 class="card-title text-center">' + studentName + '</h3></a>';
        }
    
    
        /***
         *  determine if the article contains full text content
         * 
         * */
        if (pullQuote != "") {
            pullQuoteString = '<span class="card-text studentProfilePullQuote">' + pullQuote + '</span>';
        }
    
        
    
    
        /***
         *  Write the document once
         * 
         * */
        document.write(beginningHTML);
        document.write(openCard);
        document.write(openImageWrapper);
        document.write(primaryImageString);
        document.write(closeImageWrapper);
        document.write(openCardBody);
        document.write(cardTitle);
        document.write(pullQuoteString);
        document.write(closeCardBody);
        document.write(closeCard);
        document.write(endingHTML);
    
    
    
    
    } catch (err) {
        document.write(err.message);
    }
                      