import './timeline.css'
import React, { useState, useEffect } from 'react';
import $ from "jquery"

function Description() {
    useEffect(() => {
        (function ($) {
            $(function () {

                var jbody = document.getElementsByClassName('timeliner')[0]

                jbody.addEventListener('scroll', (e) => {
                    fnOnScroll();

                });

                jbody.addEventListener('resize', (e) => {
                    fnOnResize();

                });


                var agTimeline = $('.js-timeline'),
                    agTimelineLine = $('.js-timeline_line'),
                    agTimelineLineProgress = $('.js-timeline_line-progress'),
                    agTimelinePoint = $('.js-timeline-card_point-box'),
                    agTimelineItem = $('.js-timeline_item'),
                    agOuterHeight = $(window).outerHeight(),
                    agHeight = $(window).height(),
                    f = -1,
                    agFlag = false;

                function fnOnScroll() {
                    var agPosY = $(window).scrollTop();

                    fnUpdateFrame();
                }

                function fnOnResize() {
                    var agPosY = $(window).scrollTop();
                    var agHeight = $(window).height();

                    fnUpdateFrame();
                }

                function fnUpdateWindow() {
                    var agPosY = $(window).scrollTop();
                    var agHeight = $(window).height();

                    agFlag = false;

                    agTimelineLine.css({
                        top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
                        bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
                    });

                    fnUpdateProgress()
                    // f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
                }

                function fnUpdateProgress() {
                    var agPosY = $(window).scrollTop();
                    var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

                    var i = agTop + agPosY - $(window).scrollTop();
                    var a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
                    var n = agPosY - a + agOuterHeight / 2;
                    i <= agPosY + agOuterHeight / 2 && (n = i - a);
                    agTimelineLineProgress.css({ height: n + "px" });

                    agTimelineItem.each(function () {
                        var agTop = $(this).find(agTimelinePoint).offset().top;

                        (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
                    })
                }

                function fnUpdateFrame() {
                    agFlag || requestAnimationFrame(fnUpdateWindow);
                    agFlag = true;
                }


            });
        })($);

    }, [])

    return (
        <div class="ag-timeline-block">
            <div class="ag-timeline_title-box">
                <div class="ag-timeline_tagline">Timeline</div>
                <div class="ag-timeline_title">Mon parcours</div>
            </div>
            <section class="ag-section">
                <div class="ag-format-container">
                    <div class="js-timeline ag-timeline">
                        <div class="js-timeline_line ag-timeline_line">
                            <div class="js-timeline_line-progress ag-timeline_line-progress"></div>
                        </div>
                        <div class="ag-timeline_list">

                            <div class="js-timeline_item ag-timeline_item">
                                <div class="ag-timeline-card_box">
                                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                                        <div class="ag-timeline-card_point left">2021</div>
                                    </div>
                                </div>
                                <div class="ag-timeline-card_item left">
                                    <div class="ag-timeline-card_inner">
                                        <div class="ag-timeline-card_img-box">
                                            <img src="https://newsroom.ionis-group.com/wp-content/uploads/2021/10/LOGO-EPITECH-BASELINE-QUADRI-2021.png" class="ag-timeline-card_img" width="640" height="360" />
                                        </div>
                                        <div class="ag-timeline-card_info">
                                            <div class="ag-timeline-card_title">Web@cadémie EPITECH</div>
                                            <div class="ag-timeline-card_desc">
                                                Intégrateur développeur Web
                                                Travail et apprentissage en groupe autonome,
                                                Réalisation de différents projets d'application Web
                                                Apprentissage de différentes technologies :
                                                HTML/CSS   PHP   Javascript   MySQL/noSQL
                                                React   Laravel  Wordpress   Symfony   Socket.io

                                            </div>
                                        </div>
                                    </div>
                                    <div class="ag-timeline-card_arrow"></div>
                                </div>
                            </div>

                            <div class="js-timeline_item ag-timeline_item">
                                <div class="ag-timeline-card_box">
                                    <div class="ag-timeline-card_meta-box">
                                        <div class="ag-timeline-card_meta">Season 12</div>
                                    </div>
                                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                                        <div class="ag-timeline-card_point">2020</div>
                                    </div>
                                </div>
                                <div class="ag-timeline-card_item">
                                    <div class="ag-timeline-card_inner">
                                        <div class="ag-timeline-card_img-box">
                                            <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-12.png" class="ag-timeline-card_img" width="640" height="360" alt="" />
                                        </div>
                                        <div class="ag-timeline-card_info">
                                            <div class="ag-timeline-card_title">Season 12</div>
                                            <div class="ag-timeline-card_desc">
                                                Donec pede justo, fringilla
                                                vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                                                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
                                                tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                                                tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                                                nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ag-timeline-card_arrow"></div>
                                </div>
                            </div>

                            <div class="js-timeline_item ag-timeline_item">
                                <div class="ag-timeline-card_box">
                                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                                        <div class="ag-timeline-card_point">2020</div>
                                    </div>
                                    <div class="ag-timeline-card_meta-box">
                                        <div class="ag-timeline-card_meta">Season 11</div>
                                    </div>
                                </div>
                                <div class="ag-timeline-card_item left">
                                    <div class="ag-timeline-card_inner">
                                        <div class="ag-timeline-card_img-box">
                                            <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-11.png" class="ag-timeline-card_img" width="640" height="360" alt="" />
                                        </div>
                                        <div class="ag-timeline-card_info">
                                            <div class="ag-timeline-card_title">Season 11</div>
                                            <div class="ag-timeline-card_desc">
                                                Aenean imperdiet. Etiam ultricies
                                                nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                                                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
                                                adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                                                hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                                                sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
                                                eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ag-timeline-card_arrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Description;